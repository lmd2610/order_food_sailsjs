const Store = require("../../models/Store");

module.exports = {


  friendlyName: 'New store',


  description: '',


  inputs: {
    startTime: { type: 'number' },
    endTime: { type: 'number' }
  },


  exits: {

  },


  fn: async function (inputs, exits) {
    let { startTime, endTime } = inputs;
    let start = moment(startTime).startOf('day').valueOf(); // set to 12:00 am today
    let end = moment(endTime).endOf('day').valueOf();
    let countStoreCreateByDay = await Store.countStoreCreateByDay(start, end);
    return exits.success({
      code: 0,
      message: "thành công",
      data: countStoreCreateByDay
    })

  }


};
