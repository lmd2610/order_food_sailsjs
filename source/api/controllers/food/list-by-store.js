module.exports = {


  friendlyName: 'List by store',


  description: '',


  inputs: {
    storeId: { type: 'number' },
    content: { type: "string" }
  },


  exits: {

  },


  fn: async function (inputs, exits) {
    let { storeId, content } = inputs
    let query = null;
    let result = null;
    if (content || content == "") {
      query =  `select * from food where storeId = $1 and name like "%$2%"`
      result = await sails.sendNativeQuery(query,[storeId,content])
    }
    else{
      query =  `select * from food where storeId = $1 `
      result = await sails.sendNativeQuery(query,[storeId])
    }
    return exits.success({
      code:0,
      message:"Thành công",
      data:{
        food:result
      }
    })
  }


};
