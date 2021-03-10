/**
 * Store.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    name: { type: 'string' },
    rateOne: { type: 'number' },
    rateTwo: { type: 'number' },
    rateThree: { type: 'number' },
    rateFour: { type: 'number' },
    rateFive: { type: 'number' },
    totalSold: { type: 'number' },
    totalLike: { type: 'number' }
  },
  storeInfo: async (storeId) => {
    let query = `select * from store where id=$1`;
    let result = await sails.sendNativeQuery(query, [storeId]);
    return result;
  },
  productInStoreInfo: async (storeId) => {
    let query = `select * from food where storeId = $1`;
    let result = await sails.sendNativeQuery(query, [storeId]);
    return result.rows[0];
  }
};

