module.exports = {


  friendlyName: 'List',


  description: 'List shipper.',


  inputs: {
    skip:{type:"number"},
    limit:{type:"number"}
  },


  exits: {

  },


  fn: async function (inputs,exits) {

    let {skip,limit}=inputs; 
    let query = `select * from shipper limit $1,$2`;
    let result = await sails.sendNativeQuery(query, [skip,limit]);
    return exits.success({
      code:0,
      message:"Thành công",
      data:{
        shippers:result.rows
      }
    })
  }


};
