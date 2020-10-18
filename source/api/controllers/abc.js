module.exports = {


  friendlyName: 'Abc',


  description: 'Abc something.',


  inputs: {
    abc:{type:'string'}
  },


  exits: {
    success:{}
  },


  fn: async function (inputs, exits) {
    let {abc}= inputs
    let info = await Abc.find()
    return exits.success({
      info,
      abc
    });

  }


};
