const LikeStore = require("../../models/LikeStore");

module.exports = {


  friendlyName: 'Like store',


  description: '',


  inputs: {
    storeId: { type: 'string' }
  },


  exits: {

  },


  fn: async function (inputs, exits) {
    let { storeId } = inputs;
    let customerId = this.req.customer.id
    let likeInfo = await LikeStore.likeInfo(customerId, storeId)
    if (!likeInfo) {
      await LikeStore.customerLike(customerId, storeId)
    }
    else {
      await LikeStore.customerDislike(customerId, storeId)
    }
    return exits.success({
      code: 0,
      message: "Thành công"
    })
  }


};
