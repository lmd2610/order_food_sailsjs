const LikeStore = require("../../models/LikeStore");

module.exports = {


  friendlyName: 'Like store',


  description: '',


  inputs: {
    storeId: { type: 'number' }
  },


  exits: {

  },


  fn: async function (inputs, exits) {
    let { storeId } = inputs;
    let customerId = this.req.customer.id
    let likeInfo = await LikeStore.likeInfo(customerId, storeId)

    if (likeInfo.length == 0) {
      await LikeStore.customerLike(customerId, storeId)
    }
    else {
      let status = 0
      if (likeInfo[0].isActive == 0) {
        status = 1;
      }
      await LikeStore.customerDislike(customerId, storeId, status)
    }
    return exits.success({
      code: 0,
      message: "Thành công"
    })
  }


};
