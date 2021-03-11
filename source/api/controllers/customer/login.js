
module.exports = {


  friendlyName: 'Login',


  description: 'Login customer.',


  inputs: {
    token: { type: 'string' },
    password: { type: 'string' }
  },


  exits: {

  },


  fn: async function (inputs, exits) {
    let { token, password } = inputs;
    try {
      let codeCheck = sails.helpers.rsa.verify(token)
      let email = codeCheck.email;
      let userInfo = await User.userInfoByEmail(email)
      if (!userInfo) {
        throw "user_not_exist"
      }
      console.log(userInfo[0].password)
      let compare = sails.helpers.bscrypt.verify( password,userInfo[0].password)
      if (!compare) {
        throw "password_wrong"
      }
      let customer = {
        id: userInfo[0].objectId
      }
      let tokenjwt = sails.helpers.jwt.sign(customer)
      return exits.success({
        code: 0,
        message: "Thành công",
        data: {
          token: tokenjwt
        }
      })
    } catch (error) {
      let code = 1;
      let message = null
      switch (error) {
        case "user_not_exist":
          code = 1
          message = "Người dùng không tồn tại"
          break;
        case "password_wrong":
          message = "Sai mật khẩu"
          code = 1
          break;
        default:
          message = "Đã có lỗi xảy ra"
          code = 1
          break;

      }
      return exits.success({
        code: code,
        message: message
      })
    }


  }


};
