module.exports = {


  friendlyName: 'Update rate',


  description: '',


  inputs: {
    storeId:{type:'number'},
    comment:{type:'string'}
  },


  exits: {

  },
  sync:true,

  fn:  function (inputs,exits) {
    let {storeId,comment} = inputs;
    Comment.create({
      store_id:storeId,
      comment:comment,
      user_id:this.req.userInfo.id
    })
    .then(()=>{
      return exits.success({
        success:true,
        message:"Tạo bình luận thành công"
      })
    })
    .catch((err)=>{
      console.log("false",err)
      return exits.success({
        success:false,
        message:"Tạo bình luận thất bại"
      })
    })

  }


};
