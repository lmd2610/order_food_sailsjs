module.exports = {


  friendlyName: 'Login',


  description: 'Login user.',


  inputs: {
    user_name: { type: 'string', required: true },
    password: { type: 'string', required: true },
    captra: { type: 'string' }
  },


  exits: {

  },

  sync: true,
  fn: function (inputs,exits) {
    let { user_name, password, captra } = inputs;
    User.findOne({ user_name: user_name })
      .then((userInfo) => {
        if (!userInfo) {
          return exits.success(
            {
              code: 200,
              message: 'Không tồn tại người dùng vui lòng đăng ký ',
              success: true,
            });
        }
        let checkPassword = sails.helpers.bscrypt.verify(password, userInfo.password)
        if (userInfo.user_name !== user_name || !checkPassword) {
          return exits.success(
            {
              code: 200,
              message: 'Bạn nhập sai mật khẩu hoặc password',
              success: true,
            });
        }
        let user = {
          id: userInfo.id,
        }
        let token = sails.helpers.jwt.sign(user);
        delete userInfo.password;
        return exits.success({
          code: 200,
          message: 'OK',
          success: true,
          userInfo:userInfo,
          token:token
        })
      })
  

  }


};
