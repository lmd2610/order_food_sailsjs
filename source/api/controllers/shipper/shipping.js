module.exports = {


  friendlyName: 'Shipping',


  description: 'Shipping shipper.',


  inputs: {
    saleId: { type: 'number' }
  },


  exits: {

  },


  fn: async function (inputs, exits) {
    let { saleId } = inputs;
    let saleHeaderInfoById = await SaleHeader.saleHeaderInfoById(saleId);
    if (saleHeaderInfoById.length !== 0) {
      throw "sale_not_exist"
    }
    if (saleHeaderInfoById[0].typeOfSaleId !== 3) {
      throw "customer_not_accept"
    }
    await SaleHeader.updateSaleHeader(saleId, 4)
    return exits.success({
      code: 0,
      message: "Bạn đã nhận món ăn"
    })

  }


};
