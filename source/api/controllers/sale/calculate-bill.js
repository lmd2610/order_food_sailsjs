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
    storeBranchId: { type: 'number' }
  },


  exits: {

  },


  fn: async function (inputs, exits) {

    let { list, storeBranchId } = inputs;
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
          if (list[i].foodId == listFood[j].id) {
            totalPrice += listFood[j].salePrice * list[i].quantity
            saleDetail += `${listFood[j].id},${listFood[j].salePrice * list[i].quantity},${list[i].quantity},${listFood[j].salePrice};`
          }

        }
      }
      let saleId = await SaleHeader.insertSale(customerId, 1,
        storeBranchId, totalPrice, codeVoucher,
        discountCode, saleDetail, customerInfoById.address)
      return exits.success({
        code: 0,
        message: "Bạn đã tạo đơn hàng thành công",
        data:{
          saleId
        }
      })
    } catch (error) {
      return exits.success({
        code: 1,
        message: "Thất bại"
      })
    }

  }


};
