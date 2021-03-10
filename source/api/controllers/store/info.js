module.exports = {


  friendlyName: 'Info',


  description: 'Info store.',


  inputs: {
    storeId: { type: 'number' }
  },


  exits: {

  },


  fn: async function (inputs, exits) {
    let { storeId } = inputs;
    let storeInfo = await Food.storeInfo(storeId);
    let productInStoreInfo = await Food.productInStoreInfo(storeId);
    
    return exits.success({
      code:0,
      message:"Thành công",
      data:{

      }
    })
  }


};
