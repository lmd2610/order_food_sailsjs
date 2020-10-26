/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    user_name:{type:'string', required:true},
    full_name:{type:'string', required:true},
    image_url:{type:'string'},
    address:{type:'string'},
    mobile:{type:'string'},
    email:{type:'string'},
    password:{type:'string'},
    status:{type:'number', isIn:[1,2,3,4,5,6]},

  },

};

