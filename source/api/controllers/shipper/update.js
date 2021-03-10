const { image } = require("faker");

module.exports = {


  friendlyName: 'Update',


  description: 'Update shipper.',


  inputs: {
    id: { type: 'number' },
    name: { type: 'string' },
    address: { type: 'string' },
    image: { type: 'string' },
    status: { type: 'number' }
  },


  exits: {

  },


  fn: async function (inputs, exits) {
    let { id, name, address, image, status } = inputs;
    let shipperInfo = await Shipper.shipperInfo(id);
    if(shipperInfo.length == 0){
      return exits.success({
        code: 1,
        message: "Không có dữ liệu",
      })
    }
    let query = `update shipper set name = $2, address = $3, image = $4 ,status = $5 where id = $1`;
    try {
      await sails.sendNativeQuery(query, [id, name, address, image, status]);
      return exits.success({
        code: 0,
        message: "Thành công",
      })
    } catch (error) {
      console.log("abc: ",error.message)
      return exits.success({
        code: 0,
        message: "Thành công",
      })
    }
  }
};
