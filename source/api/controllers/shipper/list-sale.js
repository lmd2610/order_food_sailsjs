const SaleHeader = require("../../models/SaleHeader");

module.exports = {


  friendlyName: 'List order',


  description: '',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs, exits) {

    let saleHeaderInfos = await SaleHeader.saleHeaderInfos(2)

    return exits.success({
      code: 0,
      message: "Thành công",
      data: saleHeaderInfos
    })

  }


};
