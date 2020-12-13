module.exports = {


  friendlyName: 'Create',


  description: 'Create shipper.',


  inputs: {
    name: { type: 'string' },
    user_name: { type: 'string', required: true },
    password: { type: 'string', required: true },
    password2: { type: 'string', required: true },
    birthday: { type: 'number' },
    phone: { type: 'string' },
    identity_card_number: { type: 'string' },
    image_id_card: { type: 'json' },
    is_partner: { type: 'boolean' },
  },


  exits: {

  },
  sync: true,

  fn: function (inputs, exits) {
    let { name, user_name, password, password2, birthday, phone, identity_card_number, image_id_card, is_partner } = inputs;

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
          birthday: birthday,
          phone: phone,
          identity_card_number: identity_card_number,
          image_id_card: image_id_card,
          is_partner: is_partner
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
        }).catch(() => {
          return exits.success(
            {
              message: 'Đăng ký shipper thất bại',
              success: false,
            });
        })
      })

  }


};
