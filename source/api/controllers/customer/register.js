const Customer = require("../../models/Customer");

module.exports = {


  friendlyName: 'Register',


  description: 'Register customer.',


  inputs: {
    name: { type: 'string' },
    birth: { type: 'number' },
    password: { type: 'string' },
    confimPassword: { type: 'string' },
    token: { type: 'string' }
  },


  exits: {

  },


  fn: async function (inputs, exits) {
    let { name, birth, password, confimPassword, token } = inputs;
    let codeCheck = sails.helpers.rsa.verify(token)
    try {
      if (password !== confimPassword) {
        throw "password not match"
      }
      password = sails.helpers.bscrypt.sign(password);
      let customerId = await Customer.createCustomer(name, birth, password, codeCheck.email)
      let customer = {
        id: customerId.rows[0][0]
      }
      let token = sails.helpers.jwt.sign(customer)
      return exits.success({
        code: 0,
        message: "Thành công",
        data: {
          token
        }
      })
    } catch (error) {
      if (error.message === "timeout") {
        return exits.success({
          code: 1,
          message: "Phiên làm việc hết hạn vui lòng lấy lại mã"
        })
      }
      else if (error.message === "password not match") {
        return exits.success({
          code: 1,
          message: "Mã password giống nhau"
        })
      }
      else {
        return exits.success({
          code: 1,
          message: "Đã có lỗi xảy ra"
        })
      }
    }


  }


};
