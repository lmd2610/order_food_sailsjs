const OrderAddress = require("../../models/OrderAddress");

module.exports = {


  friendlyName: 'Order addresses',


  description: '',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs,exits) {
    let {orderAddressId} = inputs
    // let customerId =this.req.customerId.id
    let customerId = 1
    let orderAddressInfos = await OrderAddress.orderAddressInfos(customerId)
    return exits.success({
      code:0,
      message:"Thành công",
      data:{
        orderAddressInfos: orderAddressInfos.rows[0]
      }
    })

  }


};
