const CustomerLogin = require("../../models/CustomerLogin");

module.exports = {


  friendlyName: 'Count customer login',


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
    let countCustomerLoginByHour = await CustomerLogin.countCustomerLoginByHour(start, end);
    return exits.success({
      code: 0,
      message:"Thành công",
      data: countCustomerLoginByHour
    })
  }


};
