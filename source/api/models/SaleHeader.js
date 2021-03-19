/**
 * SaleHeader.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    address: { type: 'string' },
    customerId: { type: 'number' },
    shipperId: { type: 'number' },
    typeOfSaleId: { type: 'number' },
    storeBranchId: { type: 'number' },
    totalPrice: { type: 'number' },
    code: { type: 'string' },
    discountCode: { type: 'string' },
  },
  checkListFood: async (list) => {
    for (let i = 0; i < list.length; i++) {
      if (!list.quantity || list.quantity != "" || list.quantity == 0 || list.quantity == "" || !list.quantity) {
        return false
      }
    }
    return true
  },
  insertSale: async (customerId, typeOfSaleId, storeBranchId, totalPrice, codeVoucher, discountCode, saleDetail, address) => {
    try {
      let query = `call INSERT_SALE($1,$2,$3,$4,$5,$6,$7,$8,$9)`
      await sails.sendNativeQuery(query, [customerId, typeOfSaleId, storeBranchId, totalPrice, codeVoucher, discountCode, saleDetailaddress, Date.now()])
      return
    } catch (error) {
      console.log("insert_Sale:: ", error)
      throw "insert_sale_error"
    }
  },
  saleHeaderInfoById: async (saleId) => {
    let query =`select * from saleheader where id = $1`;
    let result = await sails.sendNativeQuery(query, [saleId]);
    return result.rows;
  },
  updateSaleHeader:async(saleId)=>{
    let query= `update saleheader set typeOfSaleId = 2 where id = $1`
    await sails.sendNativeQuery(query,saleId);
    return
  }
};

