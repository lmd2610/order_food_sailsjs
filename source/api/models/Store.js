/**
 * Store.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    id: { type: 'number', autoIncrement: true, },
    name:{type:'string'},
    rate_avg:{type:'number'},
    rate_one:{type:'number'},
    rate_two:{type:'number'},
    rate_three:{type:'number'},
    rate_four:{type:'number'},
    rate_five:{type:'number'},
  },

};

