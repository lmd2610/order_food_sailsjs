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
    let userInfo = await User.userInfoByEmail(email, 0);
    if (userInfo.length !==0) {
      throw "user_existed"
    }
    if (password !== confimPassword) {
      throw "password not match"
    }
    password = sails.helpers.bscrypt.sign(password);
    let adminInfo = await Admin.createAdmin(name, password, email)
    let admin = {
      id: adminInfo.rows[0][0].v_user_id
    }
    let token = sails.helpers.jwt.sign(admin)
    return exits.success({
      code: 0,
      message: "Thành công",
      data: {
        token
      }
    })

  }


};