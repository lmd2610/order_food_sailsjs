module.exports = {


  friendlyName: 'Cancel order',


  description: '',


  inputs: {

  },


  exits: {

  },
  sync: true,

  fn: function (inputs, exits) {
    let { orderId } = inputs;
    Order.findOne({
      id: orderId
    })
      .then((orderInfo) => {
        if (!orderInfo) {
          return exits.success({
            success: false,
            message: "Không có thông tin đơn hàng"
          })
        }
        if (orderInfo.order_status !== 3) {
          return exits.success({
            success: false,
            message: "Đơn hàng của bạn không thể hủy được"
          })
        }
        Order
          .updateOne({ id: orderId })
          .set({ order_status: 7 }) // Shipper hủy đơn hàng
          .then(() => {
            return exits.success({
              success: true,
              message: "Khách hàng hủy đơn hàng thành công"
            })
          })
      })
  }


};

