module.exports = {


  friendlyName: 'Register',


  description: 'Register user.',


  inputs: {
    phone: { type: 'string', required: true },
    user_name: { type: 'string', required: true },
    full_name: { type: 'string', required: true },
    address: { type: 'string', required: true },
    mobile: { type: 'string', required: true },
    email: { type: 'string', required: true },
    password: { type: 'string', required: true },
    password2: { type: 'string', required: true },
  },


  exits: {

  },
  sync: true,

  fn: function (inputs, exits) {
    let { phone, user_name, full_name, address, mobile, email, password, password2 } = inputs;

    User.findOne({ user_name: user_name })
      .then((data) => {
        if (data) {
          return exits.success(
            {
              code: 200,
              message: 'User existed',
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
          User.create({
            phone:phone,
            user_name:user_name,
            full_name:full_name,
            address:address,
            mobile:mobile,
            email:email,
            password:passwordHash
          }).then(()=>{
            return exits.success(
              {
                code: 200,
                message: 'Đăng ký thành công',
                success: true,
                
              });
          })
        
        
          
       
        
      })

  }


};
