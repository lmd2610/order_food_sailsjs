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
  userInfoByEmail: async (email, type) => {
    let query = `select u.* from customer c inner join user u on u.objectId = c.id where u.userGroupId = $1 and email = $2`
    let result = await sails.sendNativeQuery(query, [type, email]);
    return result.rows
  },

};

