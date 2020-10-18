module.exports = {


  friendlyName: 'Abc',


  description: 'Abc abc.',


  inputs: {
    abc:{type:'string',required:true, description:"Kiểu dữ liệu string"},
    def:{type:'number',required:true, description:"Kiểu dữ liệu string"},
    ref:{type:'ref',required:true, description:"Kiểu dữ liệu string"},
    boolean:{type:'boolean',required:true, description:"Kiểu dữ liệu string"},
  },


  exits: {

  },


  fn: async function (inputs) {

    // All done.
    return;

  }


};
