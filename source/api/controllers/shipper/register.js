module.exports = {


  friendlyName: 'Register',


  description: 'Register shipper.',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs) {
    let { name, password, confimPassword, email } = inputs;
    if (password !== confimPassword) {
      throw "password not match"
    }
    password = sails.helpers.bscrypt.sign(password);
    let customerId = await Admin.createAdmin(name, password, email)
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
  }


};
