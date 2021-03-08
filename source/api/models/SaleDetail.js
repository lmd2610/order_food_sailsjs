/**
 * SaleDetail.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    
    foodId: { type: 'number' },
    saleId: { type: 'number' },
    totalCostOfGood: { type: 'number' },
    quantity: { type: 'number' },
    price: { type: 'number' }

  },

};

