const OrderAddress = require("../../models/OrderAddress");

module.exports = {


  friendlyName: 'Update order ad ress',


  description: '',


  inputs: {
    orderAddressId:{type:'number'}
  },


  exits: {

  },


  fn: async function (inputs,exits) {
    let {orderAddressId}=inputs;
    // let customerId = this.req.customer.id
    customerId =1
    let orderAddressInfo = await OrderAddress.orderAddressInfo(orderAddressId)
    if(orderAddressInfo.rows[0].length===0 ){
      return exits.success({
        code:1,
        message:"Không có thông tin địa chỉ đặt hàng",
      })
    }
    await OrderAddress.updateOrderAddress(orderAddressId,customerId)
    return exits.success({
      code:0,
      message:"Cập nhật xong địa chỉ giao hàng thành công",
    })
    // All done.
    return;

  }


};
