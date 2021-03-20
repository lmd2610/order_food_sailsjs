/**
 * Food.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    name: { type: 'string' },
    initPrice: { type: 'number' },
    typeOfFoodId: { type: 'number' },
    image: { type: 'string' },
    title: { type: 'string' },
    content: { type: 'string' },
    salePrice: { type: 'number' },
    storeId: { type: 'number' },
    menuId: { type: 'number' },
    totalSold: { type: 'number' },

  },
  searchProduct: async (content, typeOfFoodId, serviceId, skip, limit) => {
    let query = null
    let result = null
    if (limit > 1000) limit = 1000
    if (content) {
      query = `Select s.*,sb.id from store s 
      inner join food f on f.storeId = s.id 
      inner join storebranch sb on sb.storeId =s.id
      where f.name like concat("%",$1,"%") group by s.id limit $2,$3`
      result = await sails.sendNativeQuery(query, [content, skip, limit])
    }
    else if (typeOfFoodId) {
      query = `Select s.*,,sb.id from food f 
      inner join store s on f.storeId = s.id 
      inner join storebranch sb on sb.storeId =s.id
      where f.typeOfFoodId = $1 limit $2,$3`
      result = await sails.sendNativeQuery(query, [typeOfFoodId, skip, limit])

    }
    else if (serviceId) {
      query = `select st.*,sb.id
      from service s 
      inner join typeoffood tof on tof.serviceId = s.id 
      inner join typeofservice tos on tos.id = s.typeOfServiceId
      inner join food f on f.typeOfFoodId = tof.id
      inner join store st on st.id = f.storeId
      inner join storebranch sb on sb.storeId =st.id
      where s.id = $1 group by s.id limit $2,$3;`
      result = await sails.sendNativeQuery(query, [serviceId, skip, limit])
    }
    else {
      query = `Select s.* where store limit $2,$3`
      result = await sails.sendNativeQuery(query, [typeOfFoodId, skip, limit])
    }

    return result.rows;
  },
  listFood: async (list)=>{
    let str = "";
    for (let i = 0; i < list.length; i++) {
      if(i!=list.length-1){
        str += `${list[i].foodId},`
      }
      else{
        str += `${list[i].foodId}`
      }
    }
    let query = `select * from food where id in (${str})`
    let result = await sails.sendNativeQuery(query)
    return result.rows
  }
};

