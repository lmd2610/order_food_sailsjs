module.exports = {


  friendlyName: 'Rate',


  description: 'Rate user.',


  inputs: {
    storeId:{type:'number'},
    rate:{type:'number'}
  },


  exits: {

  },
  sync:true,

  fn: function (inputs,exits) {
    let {storeId,rate}=inputs;
    if(/^[1-5]/.test(rate) ===false){
      return exits.success({
        success:false,
        message:"Nhập sai định dạng đánh giá"
      })
    }
    let query = `Call CREATE_RATE($1,$2,$3,$4,$5);`;
    sails
    .sendNativeQuery(query,[Date.now(),Date.now(),rate,storeId,this.req.userInfo.id])
    .then(()=>{
      return exits.success({
        success:true,
        message:"Thêm đánh giá thành công"
      })
    })
    .catch((err)=>{
      console.log(err);
      return exits.success({
        success:true,
        message:"Có chút lỗi nhé"
      })
    })
  }


};
