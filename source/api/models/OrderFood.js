/**
 * OrderFood.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    order_id:{type:'number'},
    food_id:{type:'number'},
    quantity:{type:'number'},
    price:{type:'number'},
    options_orderfood:{type:'json'}

  },

};

