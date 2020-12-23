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

    let randomName = faker.company.companyName(); // Rowan Nikolaus

    let user_name = `store_${Math.floor(Math.random() * dodai)}`;
    let password = 123456;
    let password2 = 123456;
    Account.findOne({ username: user_name, type: 'store' })
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
        Store.create({
          name: randomName
        }).fetch().then((storeInfo) => {

          Account.create({
            username: user_name,
            password: passwordHash,
            type: 'store',
            typeId: storeInfo.id
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
