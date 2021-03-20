/**
 * Admin.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    name: { type: 'string' },

  },
  createAdmin: async (name, password, email) => {
    let query = `call REGISTER_ADMIN($1,$2,$3,$4)`;
    let result = await sails.sendNativeQuery(query, [name, password, email, Date.now()])
    return result;
  }
};

