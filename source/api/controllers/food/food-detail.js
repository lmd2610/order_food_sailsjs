module.exports = {


  friendlyName: 'Food detail',


  description: '',


  inputs: {
    foodId:{type:'number', required:true}
  },


  exits: {

  },


  fn: async function (inputs,exits) {
    let {foodId}=inputs;
    try {
      let foodInfo = await Food.find({id:foodId});
      if(!foodInfo){
        return exits.fail({
          code:1,
          message:'Không có thông tin của đồ ăn'
        })
      }
      let foodImages = await Food.find({foodId:foodId})
      if(!foodImages){
        foodImages = []
      }
      foodInfo.foodImages = foodImages;
      return exits.success({
        code:0,
        message: "Thành công",
        data:{
          foodInfo
        }
      })
    } catch (error) {
      
    }

  }


};
