module.exports = {


  friendlyName: 'List food',


  description: '',


  inputs: {
    skip:{type:'number', required:true},
    limit:{type:'number',required:true},
    sort:{type:'string'}
  },


  exits: {
    success:{code:200}
  },


  fn: async function (inputs,exits) {
    let {skip,limit, sort}=inputs;
    try {
      let listFood = await Food.find().skip(skip).limit(limit);
      return exits.success({
        code: 0,
        message:"Thành công",
        data:{
          listFood
        }
      })
    } catch (error) {
      return exits.fails({
        code:1,
        message:"Có lỗi xảy ra!",
        data: error
      })
    }
   

  }


};
