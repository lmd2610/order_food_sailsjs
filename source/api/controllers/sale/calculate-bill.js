const Customer = require("../../models/Customer");
const SaleHeader = require("../../models/SaleHeader");

module.exports = {


  friendlyName: 'Calculate bill',


  description: '',


  inputs: {
    list: {
      type: 'ref', description: `
    [
      {
      foodId:1,
      quantity:1,

    },
    {
      foodId:2,
      quantity:2
    }
  ]
    `},
    typeOfSaleId: { type: 'number' },
    storeBranchId: { type: 'number' }
  },


  exits: {

  },


  fn: async function (inputs, exits) {

    let { list, typeOfSaleId, storeBranchId } = inputs;
    let customerId = this.req.customer.id
    let totalPrice = 0;
    let discountCode = 0
    let codeVoucher = "test"
    let validateList = await SaleHeader.checkListFood(list)
    if (!validateList) {
      throw "not_exist"
    }
    let saleDetail = ""
    try {
      let customerInfoById = await Customer.customerInfoById(customerId);
      let listFood = await Food.listFood(list);
      for (let i = 0; i < listFood.length; i++) {
        for (let j = 0; j < list.length; j++) {
          if (list.foodId == listFood.id) {
            totalPrice += listFood.salePrice * list.quantity
            saleDetail += `${listFood.id},${listFood.salePrice * list.quantity},${list.quantity},${listFood.salePrice};`
          }

        }
      }
      await SaleHeader.insertSale(customerId, typeOfSaleId,
        storeBranchId, totalPrice, codeVoucher,
        discountCode, saleDetail, customerInfoById.address)
      return exits.success({
        code: 0,
        message: "Bạn đã tạo đơn hàng thành công",
     
      })
    } catch (error) {
      return exits.success({
        code: 1,
        message: "Thất bại"
      })
    }

  }


};
