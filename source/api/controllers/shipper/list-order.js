module.exports = {


  friendlyName: 'List order',


  description: '',


  inputs: {
    skip: { type: 'number' },
    limit: { type: 'number' }
  },


  exits: {

  },
  sync: true,
  fn: function (inputs, exits) {
    let { skip, limit } = inputs;
    let shipperId = this.req.shipperInfo.id;
    console.log(Date.now())
    Order.find({
      created_date  : { ">=": Date.now() - 30 * 60 * 1000 },
      order_status: 2
    })
      .limit(limit).skip(skip)
      .then((orderInfos) => {
        if (!orderInfos) {
          return exits.success({
            success: true,
            data: [],
            message: "Không có order nào"
          })
        }
        return exits.success({
          success: true,
          data: orderInfos
        })
      })
      .catch((err) => {
        console.log("shipper/list-order:  ", err);
        return exits.success({
          success: false,
          message: "Có lỗi xảy ra!"
        })
      })

  }


};
