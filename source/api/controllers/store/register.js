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

    if (userInfo.length !== 0) {
      throw "user_existed"
    }
    if (password !== confimPassword) {
      throw "password not match"
    }
    password = sails.helpers.bscrypt.sign(password);
    await Store.createStore(name, password, email)
    
    return exits.success({
      code: 0,
      message: "Thành công",
      
    })

  }


};
