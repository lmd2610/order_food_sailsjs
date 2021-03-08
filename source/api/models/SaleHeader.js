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

};

