
module.exports = {


  friendlyName: 'Accept order',


  description: '',


  inputs: {
    orderId:{type:'number'}
  },


  exits: {

  },

  sync:true,

  fn:  function (inputs,exits) {
    let {orderId} = inputs;
    let shipperId = this.req.shipperInfo.id;
    Order
    .findOne({id:orderId})
    .then((orderInfo)=>{
      if(!orderInfo){
        return exits.success({
          success:false,
          message:"Không tồn tại thông tin giao dịch"
        })
      }
      if(orderInfo.order_status !==2){
        return exits.success({
          success:false,
          message:"Nhận đơn hàng không hợp lệ"
        })
      }
      Order
      .updateOne({id:orderId})
      .set({
        order_status:3,
        shipper_id:shipperId
      })// Tài xế đã nhận đơn hàng
      .then(()=>{
        return exits.success({
          success:true,
          message:"Tài xế đã nhận đơn hàng"
        })
      })
    })

  }


};
