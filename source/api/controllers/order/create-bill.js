const Order = require("../../models/Order");

module.exports = {


  friendlyName: 'Create bill',


  description: '',


  inputs: {
    orderId: { type: 'number' }
  },


  exits: {

  },
  sync: true,

  fn: function (inputs, exits) {
    let { orderId } = inputs;
    Order.findOne({ id: orderId })
      .then((orderInfo) => {
        if (!orderInfo) {
          return exits.success({
            success: false,
            message: "Không có thông tin đặt hàng"
          })
        }
        Order
          .updateOne({ id: orderId })
          .set({ order_status: 2 })
          .then(()=>{
            return exits.success({
              success: true,
              message: "Thanh toán thành công"
            })
          }) //Trạng thái đặt hàng thành công
      })

  }


};
