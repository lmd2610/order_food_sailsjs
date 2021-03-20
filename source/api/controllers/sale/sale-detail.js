const SaleDetail = require("../../models/SaleDetail");
const SaleHeader = require("../../models/SaleHeader");

module.exports = {


  friendlyName: 'Sale detail',


  description: '',


  inputs: {
    saleId: { type: 'number' }
  },


  exits: {

  },


  fn: async function (inputs, exits) {
    let { saleId } = inputs
    let customerId = this.req.customer.id;
    let saleHeaderInfoById = await SaleHeader.saleHeaderInfoById(saleId);
    if (saleHeaderInfoById.typeOfSaleId !== 7 && saleHeaderInfoById.customerId !== customerId) {
      return exits.success({
        code: 1,
        message: "Bạn chưa hoàn thành đơn hàng"
      })
    }
    let saleDetailInfos = await SaleDetail.saleDetailInfos(saleId)
    return exits.success({
      code: 0,
      message: "Thành công",
      data: saleDetailInfos
    })

  }


};
