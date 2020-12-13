module.exports = {


  friendlyName: 'Shipped food',


  description: '',


  inputs: {
    orderId: { type: 'number' }
  },


  exits: {

  },
  sync: true,

  fn: function (inputs, exits) {
    let { orderId } = inputs

    Order
      .findOne({ id: orderId })
      .then((orderInfo) => {
        if (!orderInfo) {
          return exits.success({
            success: false,
            message: "Không có thông tin đơn hàng"
          })
        }
        if (orderInfo.order_status !== 4) {
          return exits.success({
            success: false,
            message: "Đơn hàng phải xác nhận trước"
          })
        }
        Order
          .updateOne({ id: orderId })
          .set({ order_status: 5 })
          .then(() => {
            return exits.success({
              success: true,
              message: "Đơn hàng đã giao thành công"
            })
          })
      })
  }


};
