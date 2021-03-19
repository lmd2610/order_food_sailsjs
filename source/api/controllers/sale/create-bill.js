const SaleHeader = require("../../models/SaleHeader");

module.exports = {


  friendlyName: 'Create bill',


  description: '',


  inputs: {
    saleId: { type: 'number' }
  },


  exits: {

  },


  fn: async function (inputs, exits) {
    let { saleId } = inputs;
    let customerId = this.req.customer.id
    try {
      let saleHeaderInfo = await SaleHeader.saleHeaderInfoById(saleId)
      if (saleHeaderInfo.customerId !== customerId) {
        return exits.success({
          code: 1,
          message: "Bạn không có đơn hàng này"
        })
      }
      if (saleHeaderInfo.typeOfSaleId !== 1) {
        return exits.success({
          code: 1,
          message: "Đơn hàng của bạn đã hoàn thành"
        })
      }
      await SaleHeader.updateSaleHeader(saleId)
      return exits.success({
        code: 1,
        message: "Tạo đơn hàng thành công"
      })
    } catch (error) {
      return exits.success({
        code: 1,
        message: "Thất bại"
      })
    }
    // All done.
    return;

  }


};
