module.exports = {


  friendlyName: 'Login',


  description: 'Login admin.',


  inputs: {
    email: { type: 'string' },
    password: { type: 'string' }
  },


  exits: {

  },


  fn: async function (inputs, exits) {
    let { email, password } = inputs

    
    let userInfo = await User.userInfoByEmail(email, 0)
    if (userInfo.length ===0) {
      throw "user_not_exist"
    }

    let compare = sails.helpers.bscrypt.verify(password, userInfo[0].password)
    if (!compare) {
      throw "password_wrong"
    }
    let admin = {
      id: userInfo[0].objectId
    }
    let tokenjwt = sails.helpers.jwt.sign(admin)
    return exits.success({
      code: 0,
      message: "Thành công",
      data: {
        token: tokenjwt
      }
    })

  }


};
