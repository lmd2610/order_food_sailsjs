/**
 * Store.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    name: { type: 'string' },
    rateOne: { type: 'number', defaultsTo: 0 },
    rateTwo: { type: 'number', defaultsTo: 0 },
    rateThree: { type: 'number', defaultsTo: 0 },
    rateFour: { type: 'number', defaultsTo: 0 },
    rateFive: { type: 'number', defaultsTo: 0 },
    totalSold: { type: 'number', defaultsTo: 0 },
    totalLike: { type: 'number', defaultsTo: 0 }
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
  },
  createStore: async (name, password, email) => {
    let query = `call REGISTER_STORE($1,$2,$3,$4)`;
    let result = await sails.sendNativeQuery(query, [name, password, email, Date.now()])
    return result;
  },
  countStoreCreateByDay:async(startTime, endTime) =>{
    let query =`SELECT from_unixtime(createdAt/1000, '%Y-%m-%d') date_fm, COUNT(id) tong FROM store where createdAt > $1  and createdAt < $2 
    GROUP BY date_fm ORDER BY date_fm DESC `
    let result = await sails.sendNativeQuery(query, [startTime, endTime])
    return result.rows;
  }
};

