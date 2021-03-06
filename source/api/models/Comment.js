/**
 * Comment.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    
    customerId: { type: 'number' },
    storeId: { type: 'number' },
    content: { type: 'string' }
  },

};

