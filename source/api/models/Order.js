/**
 * Order.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    id: { type: 'number', autoIncrement: true, },
    address:{type:'string'},
    user_id:{type:'number'},
    order_status:{type:'number', isIn:[1,2,3,4,5,6]},
  },

};

