module.exports = {


  friendlyName: 'List by category',


  description: '',


  inputs: {
    categoryId: { type: 'number' },
    skip: { type: 'number' },
    limit: { type: 'number' }
  },


  exits: {

  },


  fn: async function (inputs,exits) {
    let { categoryId, skip, limit } = inputs
    let query = `select * from food where typeOfFoodId = $1 limit $2,$3`
    let result = await sails.sendNativeQuery(query, [categoryId, skip, limit])
    return exits.success({
      code: 0,
      message: "Thành công",
      data: {
        foods: result.rows
      }
    })
  }


};
