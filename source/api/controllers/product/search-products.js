module.exports = {


  friendlyName: 'Search products',


  description: '',


  inputs: {
    content: { type: 'string' },
    typeOfFoodId: { type: 'number' },
    serviceId: { type: 'number' },
    skip: { type: 'number' },
    limit: { type: 'number' }
  },


  exits: {

  },


  fn: async function (inputs, exits) {
    let { content, typeOfFoodId, serviceId, skip, limit } = inputs
    if (content && typeOfFoodId && serviceId) {
      return exits.success({
        code: 1,
        message: "Vui lòng truyền 1 giá trị content, cateogyID, serviceId"
      })
    }
    if ((content && typeOfFoodId) || (typeOfFoodId && serviceId) || (content && serviceId)) {
      return exits.success({
        code: 1,
        message: "Vui lòng truyền 1 giá trị content, cateogyID, serviceId"
      })
    }
    let searchProduct = await Food.searchProduct(content, typeOfFoodId, serviceId, skip, limit)
    return exits.success({
      code: 0,
      message: "Thành công",
      data: {
        searchProduct
      }
    })
  }


};
