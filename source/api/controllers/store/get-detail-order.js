module.exports = {


  friendlyName: 'Get detail order',


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
        id: orderId,
        created_date: { ">": Date.now() - 86400*1000 }
      })
      .then((orderInfo) => {
        if(!orderInfo){
          return exits.success({
            success:false,
            message:'Không tồn đơn hàng'
          })
        }
        if(orderInfo.order_status !==1){
          return exits.success({
            success:false,
            message:'Trạng thái đơn hàng không hợp lệ'
          }) 
        }
        OrderFood
        .find({
          order_id:orderId
        })
        .then((orderFoods)=>{
          return exits.success({
            success:true,
            message:'Thành công',
            data:{
              orderFoods
            }
          }) 
        })
        
      })
  }


};
