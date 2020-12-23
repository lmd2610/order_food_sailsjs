module.exports = {


  friendlyName: 'Get order store',


  description: '',


  inputs: {

  },


  exits: {

  },
  sync: true,

  fn: function (inputs, exits) {
    let storeId = this.req.storeInfo.id
    Order
      .find({
        store_id: storeId,
        order_status: 1,
        created_date: { ">": Date.now() - 86400*1000 }
      })
      .then((orderInfo) => {
        if (!orderInfo) {
          return exits.success({
            success: false,
            message: "Không có đơn hàng",
            data: []
          })
        }
        return exits.success({
          success: true,
          message: "Thành công",
          data: {
            orderInfo
          }
        })
      })
  }


};
