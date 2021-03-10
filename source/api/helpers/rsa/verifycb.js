const moment = require('moment'), crypto = require('crypto'), password = '8EWAREG9XLFUN2CS', algorithm = 'aes-192-cbc';
module.exports = {


  friendlyName: 'Verify',


  description: 'Verify jwt.',


  inputs: {
    token: { type: 'string', description: 'Token cần kiểm tra', required: true }
  },


  exits: {

    success: {
      description: 'All done.',
    },

  },

  sync: true,
  fn: function (inputs, exits) {
    let { token } = inputs;
    try {
      let decoded = decrypt(token);
     
      return exits.success(decoded);
    } catch (err) {
      throw new Error(Err.CODE.TOKEN_EXPIRED)
    }
  }
};

function decrypt(encrypted) {
  const key = crypto.scryptSync(password, 'salt', 24);
  const iv = Buffer.alloc(16, 0); // Initialization vector.
  const decipher = crypto.createDecipheriv(algorithm, key, iv);
  let decrypted = decipher.update(encrypted, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
}