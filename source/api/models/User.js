/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    
    userGroupId: { type: 'number' },
    phone: { type: 'string' },
    password: { type: 'string' },
    email: { type: 'string' },
    objectId: { type: 'number' },
  },

};

