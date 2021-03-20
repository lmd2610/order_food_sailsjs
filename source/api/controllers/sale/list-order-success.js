

module.exports = {


  friendlyName: 'List order success',


  description: '',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs, exits) {
    let customerId = this.req.customer.id;
    let saleHeaderInfoByCustomer = await SaleHeader.saleHeaderInfoByCustomer(customerId)

    // All done.
    return exits.success({
      code: 0,
      message: "Thành công",
      data: saleHeaderInfoByCustomer
    })

  }


};
