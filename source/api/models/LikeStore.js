/**
 * LikeStore.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    customerId: { type: 'number' },
    storeId: { type: 'number' },
    isActive: { type: 'number' }
  },
  likeInfo: async (customerId, storeId) => {
    let query = `select * from likestore ls where ls.customerId = $1 and ls.storeId = $2`
    let result = await sails.sendNativeQuery(query, [customerId, storeId])
    return result.rows;
  },
  likeInfos: async (customerId) => {
    let query = `select * from likestore ls inner join store s on ls.storeId = s.id where ls.customerId = $1 and ls.isActive = 1`
    let result = await sails.sendNativeQuery(query, [customerId])
    return result.rows;
  },
  customerLike: async (customerId, storeId) => {
    let query = `call CREATE_LIKE($1,$2,$3)`;
    let result = await sails.sendNativeQuery(query, [storeId, customerId, Date.now()]);
    return result.rows
  },
  customerDislike: async (customerId, storeId,status) => {
    let query = `call DIS_LIKE($1,$2,$3,$4)`;
    let result = await sails.sendNativeQuery(query, [ storeId,customerId, Date.now(),status]);
    return result.rows
  }
};

