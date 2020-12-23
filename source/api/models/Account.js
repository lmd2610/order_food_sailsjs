/**
 * Account.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    id: { type: 'number', autoIncrement: true, },
    username:{type:'string', required:true},
    password:{type:'string'},
    type:{type:'number', isIn:[0,1,2,3]},
    typeId:{type:'number'},
    status:{type:'boolean',defaultsTo:false}
  },

};

