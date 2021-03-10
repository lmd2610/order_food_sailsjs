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
  likeInfo: async () => {
    let query = `select * from likestore`
    let result = await sails.sendNativeQuery(query)
    return result;
  },
  customerLike:async()=>{
    let query =  `call`
  }
};

