module.exports = {


  friendlyName: 'Create',


  description: 'Create store.',


  inputs: {
    name: { type: 'string' },
    user_name: { type: 'string', required: true },
    password: { type: 'string', required: true },
    password2: { type: 'string', required: true }
  },


  exits: {

  },

  sync: true,
  fn: function (inputs, exits) {
    let { name, user_name, password, password2 } = inputs;

    Account.findOne({ username: user_name, type: this.req.typeUser })
      .then((data) => {
        if (data) {
          return exits.success(
            {
              code: 200,
              message: 'Cửa hàng này đã tồn tại',
              success: true,
              data: {
                inputs
              }
            });
        }
        if (password !== password2) {
          return exits.success(
            {
              code: 200,
              message: 'Xác nhận mật khẩu sai',
              success: true,
              data: {
                inputs
              }
            });
        }
        let passwordHash = sails.helpers.bscrypt.sign(password);
        Store.create({
          name: name
        }).fetch().then((storeInfo) => {

          Account.create({
            username: user_name,
            password: passwordHash,
            type: this.req.typeUser,
            typeId: storeInfo.id
          }).then(() => { })
          return exits.success(
            {
              code: 201,
              message: 'Đăng ký cửa hàng thành công',
              success: true,
            });
        }).catch(() => {
          return exits.success(
            {
              message: 'Đăng ký cửa hàng thất bại',
              success: false,
            });
        })
      })

  }


};
