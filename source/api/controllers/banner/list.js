module.exports = {


  friendlyName: 'List',


  description: 'List banner.',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs, exits) {

    let query = `select * from banner where isActive =1 limit 0,5`
    let result = await sails.sendNativeQuery(query)
    return exits.success({
      code: 0,
      message: "Thành công",
      data: {
        banner: result
      }
    })

  }


};
