module.exports = {


  friendlyName: 'Calculate bill',


  description: '',


  inputs: {
    listFood:{type:'ref', required:true},

  },


  exits: {

  },


  fn: async function (inputs) {
    let {listFood} = inputs;
    
    // All done.
    return;

  }


};
