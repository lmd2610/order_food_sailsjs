const LikeStore = require("../../models/LikeStore");

module.exports = {


  friendlyName: 'List like',


  description: '',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs, exits) {
    let customerId = this.req.customer.id;
    let likeInfos = await LikeStore.likeInfos(customerId);
    return exits.success({
      code: 0,
      message: "Thành công",
      data: likeInfos
    })

  }


};
