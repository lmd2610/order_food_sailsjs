/**
 * Shipper.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    name: { type: 'string' },
    address: { type: 'string' },

    image: { type: 'string' },
    userGroupId: { type: 'number' },
    status: { type: 'number' },

  },
  shipperInfo: async (shipperId) => {
    let query = `select * from shipper where id = $1`
    let result = await sails.sendNativeQuery(query, [shipperId]);
    return result.rows
  },
  createShipper: async (name, address, image, password, email) => {
    let query = `call REGISTER_SHIPPER($1,$2,$3,$4,$5,$6)`;
    let result = await sails.sendNativeQuery(query, [name, address, image, password, email, Date.now()])
    return result;
  }
};

