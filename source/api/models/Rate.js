/**
 * Rate.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    id: { type: 'number', autoIncrement : true },
    customerId:{type:'number'},
    storeId:{type:'number'},
    name: { type: 'string' },
    star: {type:'number'}
  },

};

