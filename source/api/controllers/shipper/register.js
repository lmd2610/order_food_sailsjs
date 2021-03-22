module.exports = {


  friendlyName: 'Register',


  description: 'Register shipper.',


  inputs: {
    name:{type:'string'},
    password:{type:'string'},
    confimPassword:{type:'string'},
    email:{type:'string'},
    address:{type:'string'},
    image: { type: 'string' },
  },


  exits: {

  },


  fn: async function (inputs,exits) {
    let { name, password, confimPassword, email,address,image } = inputs;
    let userInfo = await User.userInfoByEmail(email, 2);
    if (userInfo.length !== 0) {
      throw "user_existed"
    }
    if (password !== confimPassword) {
      throw "password not match"
    }
    password = sails.helpers.bscrypt.sign(password);
    let shipperId = await Shipper.createShipper(name, address,image,password, email)
    
    
    return exits.success({
      code: 0,
      message: "Thành công",
      
    })
  }


};
