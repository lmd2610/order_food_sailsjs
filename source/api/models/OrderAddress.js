/**
 * Admin.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */



module.exports = {

    attributes: {
      
      address: { type: 'string' },
      type:{type:'number'},
      isActive:{type:'number'},
      userId:{type:'number'}
    },
    importOrderAddress:async(address,type,customerId)=>{
        let query = `call PT_IMP_ODR_ADR($1,$2,$3,$4)`
        let result=  await sails.sendNativeQuery(query,[address,type,customerId,Date.now()])
        return result;
    },
    orderAddressInfo:async (orderAddressId)=>{
        let query = `Select * from orderaddress where id = $1`
        let result = await sails.sendNativeQuery(query,[orderAddressId])
        return result
    },
    orderAddressInfos:async (customerId)=>{
        let query = `SELECT id,address,isActive FROM orderaddress where customerId = 1 limit 0,10`
        let result = await sails.sendNativeQuery(query,[customerId])
        return result
    },
    updateOrderAddress:async(orderAddressId,customerId)=>{
        let query = `call PT_UPD_ODR_ADR($1,$2)`
        let result = await sails.sendNativeQuery(query,[orderAddressId,customerId])
        return result
    }
  };
  
  