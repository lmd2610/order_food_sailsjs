/**
 * CustomerLogin.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    customerId: { type: 'number' },
  },
  customerLoginInfo: async (customerId) => {
    let day = moment().startOf('day').valueOf();
    let query = `select * from customerlogin where customerId = $1 and createdAt > $2`;
    let result = await sails.sendNatvieQuery(query, [customerId, day]);
    return result.rows
  },
  createCustomerLogin: async (customerId) =>{
    let query = `INSERT INTO customerlogin (createdAt, updatedAt, customerId) VALUES ($1, $2, $3);`
    await sails.sendNatvieQuery(query,[Date.now(), Date.now(), customerId]);
    return;
  },
  countCustomerLoginByHour:async (startTime, endTime)=>{
    let query = `select COUNT(id) tong,from_unixtime(createdAt/1000, '%Y-%m-%d-%H') date_fm  from customerlogin WHERE createdAt > $1 and updatedAt < $2 GROUP BY date_fm`
    let result = await sails.sendNatvieQuery(query,[startTime, endTime, customerId]);
    return result.rows;
  }
};

