/**
 * FoodImage.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    id: { type: 'number', autoIncrement: true, },
    image:{type:'string'},
    food_id:{type:'number'},
    status:{type:'number'},
  },

};

