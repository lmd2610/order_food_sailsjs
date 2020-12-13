module.exports = {


  friendlyName: 'List order by store',


  description: '',


  inputs: {
    store_id: { type: 'number' }
  },


  exits: {

  },
  sync: true,

  fn: function (inputs) {
    let { store_id } = inputs;
    Order
      .find({ store_id: store_id })
      .then((order_info) => {
        if (order_info.length === 0) {
          return this.exits.success({
            success: true,
            message: "Cửa hàng của bạn không có đơn hàng nào",
            data: {
              order_info: []
            }
          })
        }
        return this.exits.success({
          success: true,
          message: "Cửa hàng của bạn không có đơn hàng nào",
          data: {
            order_info: order_info
          }
        })

      })

  }


};
