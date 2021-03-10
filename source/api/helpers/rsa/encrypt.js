const moment = require('moment'), crypto = require('crypto'), password = 'ddsdsdsdsdsdsd', algorithm = 'aes-192-cbc';
module.exports = {
  friendlyName: 'Sign',
  description: 'Sign jwt.',
  inputs: {
    user: { type: 'ref', description: 'Thông tin người dùng', required: true },
    time: { type: 'number', description: 'Thời gian hết hạn. Đơn vị milisecond', defaultsTo: 300000 }
  },


  exits: {

    success: {
      description: 'All done.',
    },

  },

  sync: true,
  fn: function (inputs, exits) {
    let { user, time } = inputs;
    let data = { user, expire: moment().add(time, 'second').valueOf() };
    let token = encrypt(JSON.stringify(data));
    exits.success(token);
  }
};

function encrypt(text) {
  const key = crypto.scryptSync(password, 'salt', 24);
  const iv = Buffer.alloc(16, 0); // Initialization vector.
  const cipher = crypto.createCipheriv(algorithm, key, iv);
  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return encrypted;
}