/**
 * StoreBranch.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    
    name: { type: 'string' },
    address: { type: 'string' },
    image: { type: 'string' },
    status:{type:'number'},
    storeId:{type:'number'}
  },

};

