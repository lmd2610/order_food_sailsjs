module.exports = {


  friendlyName: 'Create',


  description: 'Create shipper.',


  inputs: {
    name: { type: 'string' },
    user_name: { type: 'string', required: true },
    password: { type: 'string', required: true },
    password2: { type: 'string', required: true },
    phone: { type: 'string' },
  },


  exits: {

  },
  sync: true,

  fn: function (inputs, exits) {
    let { name, user_name, password, password2, phone } = inputs;

    Account.findOne({ username: user_name, type: this.req.typeUser })
      .then((data) => {
        if (data) {
          return exits.success(
            {
              code: 200,
              message: 'Tài khoản shipper đã tồn tại này đã tồn tại',
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
        Shipper.create({
          name: name,
          phone: phone,
          
        }).fetch().then((shipperInfo) => {
          Account.create({
            username: user_name,
            password: passwordHash,
            type: this.req.typeUser,
            typeId: shipperInfo.id
          }).then(() => { })
          return exits.success(
            {
              code: 201,
              message: 'Đăng ký shipper thành công',
              success: true,
            });
        }).catch((error) => {
          console.log(error)
          return exits.success(
            {
              message: 'Đăng ký shipper thất bại',
              success: false,
            });
        })
      })

  }


};
