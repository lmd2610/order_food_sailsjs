module.exports = {


  friendlyName: 'Received food',


  description: '',


  inputs: {
    orderId: { type: 'number' }
  },


  exits: {

  },
  sync: true,

  fn: function (inputs, exits) {
    let { orderId } = inputs;
    Order
      .findOne({
        id: orderId
      })
      .then((orderInfo) => {
        if (!orderInfo) {
          return exits.success({
            success: false,
            message: "Không tồn tại đơn hàng"
          })
        }
        if (orderInfo.order_status !== 3) {
          return exits.success({
            success: false,
            message: "Bạn phải nhận hàng trước khi lấy đơn hàng"
          })
        }
        Order
        .updateOne({id:orderId})
        .set({order_status:4})
        .then(()=>{
          return exits.success({
            success: true,
            message: "Tài xế đã lấy được món ăn"
          })
        })
    })
  }


};
