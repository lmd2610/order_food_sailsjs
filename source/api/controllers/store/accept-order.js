const getOrderStore = require("./get-order-store");

module.exports = {


  friendlyName: 'Accept order',


  description: '',


  inputs: {
    orderId: { type: 'number' }
  },


  exits: {

  },
  sync: true,

  fn: function (inputs, exits) {
    let { orderId } = inputs
    let storeId = this.req.storeInfo.id;
    Order
      .findOne({
        id: orderId,
        created_date: { ">": Date.now() - 86400 * 1000 }
      })
      .then((orderInfo) => {
        if (!orderInfo) {
          return exits.success({
            success: false,
            message: 'Không tồn tại đơn hàng'
          })
        }
        if (orderInfo.store_id !== storeId) {
          return exits.success({
            success: false,
            message: 'Sai cửa hàng'
          })
        }
        if (orderInfo.order_status !== 1) {
          return exits.success({
            success: false,
            message: 'Sai trạng thái đơn hàng'
          })
        }
        Order
          .updateOne({ id: orderId })
          .set({
            order_status: 2 // Trạng thái cửa hàng xác nhận đơn hàng
          })
          .then(() => {
            return exits.success({
              success: true,
              message: 'Đã xác nhận đơn hàng thành công'
            })
          })
      })
  }


};
