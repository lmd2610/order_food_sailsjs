module.exports = {


  friendlyName: 'List',


  description: 'List category.',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs, exits) {

    let query = `select * from typeoffood limit 0,20`
    let result = await sails.sendNativeQuery(query)
    return exits.success({
      code: 0,
      message: "Thành công",
      data: {
        category: result.rows
      }
    })
  }


};
