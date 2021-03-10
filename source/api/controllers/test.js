module.exports = {


  friendlyName: 'Test',


  description: 'Test something.',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs,exits) {

    let a = await sails.services.redis.get("a")
  
    console.log(a);
    return exits.success(a);

  }


};
