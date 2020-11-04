module.exports = {


  friendlyName: 'Sign',


  description: 'Sign jwt.',


  inputs: {
    userInfo:{type:'json',required:true}
  },


  exits: {

    success: {
      description: 'All done.',
    },

  },


  fn: async function (inputs,exits) {
    let {userInfo} = inputs
    // let jwt.sign({
    //   exp: Math.floor(Date.now() / 1000) + (60 * 60),
    //   data: 'foobar'
    // }, 'secret');
  }


};

