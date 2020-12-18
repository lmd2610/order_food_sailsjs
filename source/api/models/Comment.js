/**
 * Comment.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    id:{type:'number', autoIncrement:true},
    store_id:{type:'number'},
    user_id:{type:'number'},
    comment:{type:'string'}
  

  },

};

