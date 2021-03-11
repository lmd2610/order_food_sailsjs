const OrderAddress = require("../../models/OrderAddress");

module.exports = {


  friendlyName: 'Import order address',


  description: '',


  inputs: {
    address:{type:"string"},
    type:{type:'number'},
  },


  exits: {

  },


  fn: async function (inputs,exits) {
    let {address,type}=inputs
    try {
      let customerId = this.req.customer.id
      // let customerId = 1;
      await OrderAddress.importOrderAddress(address,type,customerId)
      return exits.success({
        code:0,
        message:"Thành công"
      })
    } catch (error) {
      console.log("APi:order-address/import-order-address: ", error.message)
      return exits.success({
        code:1,
        message:"Thất bại"
      })
    }

  }


};
