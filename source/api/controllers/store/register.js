const Store = require("../../models/Store");

module.exports = {


  friendlyName: 'Register',


  description: 'Register store.',


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
    let userInfo = await User.userInfoByEmail(email, 3);
    if (userInfo) {
      throw "user_existed"
    }
    if (password !== confimPassword) {
      throw "password not match"
    }
    password = sails.helpers.bscrypt.sign(password);
    let storeId = await Store.createStore(name, password, email)
    let store = {
      id: storeId.rows[0][0]
    }
    let token = sails.helpers.jwt.sign(store)
    return exits.success({
      code: 0,
      message: "Thành công",
      data: {
        token
      }
    })

  }


};
