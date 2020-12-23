const faker = require('faker');
module.exports = {


  friendlyName: 'Create user',


  description: '',


  inputs: {
    dodai: { type: 'number' }
  },


  exits: {

  },
  sync: true,

  fn: function (inputs, exits) {
    let { dodai } = inputs

    let randomName = faker.name.findName(); // Rowan Nikolaus
    let randomEmail = faker.internet.email(); // Kassandra().Haley@erich.biz
    let randomAddress = faker.address.city();
    let randomPhoneNumber = faker.phone.phoneNumber();
    let user_name = `shipper_${Math.floor(Math.random() * dodai)}`;
    let password = 123456;
    let password2 = 123456;
    Account.findOne({ username: user_name, type: 'shipper' })
      .then((data) => {
        if (data) {
          return exits.success(
            {
              code: 200,
              message: 'Tài khoản đã tồn tại',
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
          name: randomName,
          birthday: Date.now(),
          phone: randomPhoneNumber,
          identity_card_number: '00000000',
          image_id_card: 'image',
          is_partner: 1
        }).fetch().then((userInfo) => {
          Account.create({
            username: user_name,
            password: passwordHash,
            type: 'shipper',
            typeId: userInfo.id
          }).then(() => { })
          return exits.success(
            {
              code: 201,
              message: 'Đăng ký thành công',
              success: true,

            });
        })





      })

  }


};
