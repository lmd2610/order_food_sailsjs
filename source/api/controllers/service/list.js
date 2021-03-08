module.exports = {


  friendlyName: 'List',


  description: 'List service.',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs, exits) {

    let query = `select tos.* from service s 
    inner join typeoffood tof on tof.serviceId = s.id
    inner join typeofservice tos on tos.id = s.typeOfServiceId
    where tos.id = 1 limit 0,16`
    let result = await sails.sendNativeQuery(query)
    return exits.success({
      code:0,
      message:"Thành công",
      data:{
        banner:result.rows[0]
      }
    })
  }


};
