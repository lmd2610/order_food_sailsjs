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


  fn: async function (inputs) {
    let { name, password, confimPassword, email,address,image } = inputs;
    let userInfo = await User.userInfoByEmail(email, 2);
    if (userInfo) {
      throw "user_existed"
    }
    if (password !== confimPassword) {
      throw "password not match"
    }
    password = sails.helpers.bscrypt.sign(password);
    let shipperId = await Shipper.createShipper(name, address,image,password, email)
    let shipper = {
      id: shipperId.rows[0][0]
    }
    let token = sails.helpers.jwt.sign(shipper)
    return exits.success({
      code: 0,
      message: "Thành công",
      data: {
        token
      }
    })
  }


};
