module.exports = {


  friendlyName: 'Register',


  description: 'Register admin.',


  inputs: {
    name: { type: 'string' },
    password: { type: 'string' },
    confimPassword: { type: 'string' },
    email: { type: 'string' }
  },


  exits: {

  },


  fn: async function (inputs, exits) {
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
