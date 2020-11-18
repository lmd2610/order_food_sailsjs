module.exports = {


  friendlyName: 'Get all',


  description: '',


  inputs: {
    skip: { type: 'number', required: true },
    limit: { type: 'number', required: true },
  },


  exits: {

  },
  sync:true,

  fn:function (inputs, exits) {
    let {skip,limit} = inputs;
    Store.find()
    .skip(skip)
    .limit(limit)
    .then((storeInfos)=>{
      if(!storeInfos){
        return exits.success({
          success:false,
          message:"Không có cửa hàng nào",
        })
      }
      return exits.success({
        success:true,
        message:"Thành công",
        data:{
          storeInfos
        }
      })
    })

  }


};
