module.exports = {


  friendlyName: 'Login',


  description: 'Login store.',


  inputs: {
    email: { type: 'string' },
    password: { type: 'string' }
  },


  exits: {

  },


  fn: async function (inputs) {

    let { email, password } = inputs
    let userInfo = await User.userInfoByEmail(email, 3)
    if (!userInfo) {
      throw "user_not_exist"
    }
    console.log(userInfo[0].password)
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
