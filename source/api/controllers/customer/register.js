module.exports = {


  friendlyName: 'Register',


  description: 'Register customer.',


  inputs: {
    name:{type:'string'},
    birth:{type:'number'},
    password:{type:'string'},
    confimPassword:{type:'string'},
    token:{type:'string'}
  },


  exits: {

  },


  fn: async function (inputs) {

    // All done.
    return;

  }


};
