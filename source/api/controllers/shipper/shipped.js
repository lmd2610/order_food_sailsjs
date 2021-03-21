module.exports = {


  friendlyName: 'Shipped',


  description: 'Shipped shipper.',


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
    if (saleHeaderInfoById[0].typeOfSaleId !== 4) {
      throw "customer_not_accept"
    }
    await SaleHeader.updateSaleHeader(saleId, 5)
    return exits.success({
      code: 0,
      message: "Bạn đã giao món ăn thành công"
    })

  }


};
