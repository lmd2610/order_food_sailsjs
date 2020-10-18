/**
 * Abc.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    abc:{type:'string'},
    a:{type:'number',required:true},
    allowNull:{type:'boolean',allowNull:true},
    defaultto:{type:'boolean'},

  },

};

