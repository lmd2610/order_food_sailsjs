
module.exports = {


  friendlyName: 'Check phone',


  description: '',


  inputs: {
    email: { type: 'string' }
  },


  exits: {

  },


  fn: async function (inputs, exits) {
    let { email } = inputs;
    try {
      let checkEmail = await sails.helpers.common.validateEmail(email)
      if (!checkEmail) {
        return exits.success({
          code: 1,
          message: "Vui lòng nhập đúng định dạng email"
        })
      }
      let checkBlockEmail = await sails.services.redis.get(`OTP_BLOCK_${email}`)
      if (checkBlockEmail) {
        return exits.success({
          code: 1,
          message: "Vui lòng đợi 30p để đăng nhập lại"
        })
      }
      await sails.services.redis.incrby(`OTP_${email}`, 1);
      let checkRateLimitOTP = await sails.services.redis.get(`OTP_${email}`);
      if (Number(checkRateLimitOTP) > 3) {
        await sails.services.redis.setExpire(`OTP_BLOCK_${email}`, 1, 60 * 30)
        return exits.success({
          code: 1,
          message: "Vui lòng đợi 30p để đăng nhập lại"
        })

      }
      let customerInfoByEmail = await Customer.customerInfoByEmail(email);
      let code = 20;
      let message = "Tài khoản không tồn tại vui lòng chuyển sang trang nhập OTP"
      if (customerInfoByEmail.length > 0) {
        let user = {
          email: email,
        }
        let token = sails.helpers.rsa.encrypt(user, 3000)
        code = 10;
        message = "Tài khoản tồn tại vui lòng chuyển sang trang nhập mk"
        return exits.success({
          code: code,
          message: message,
          data: {
            token
          }
        })
      }
     

      let ttlLimitEmail = await sails.services.redis.ttl(`OTP_${email}`);
      if (ttlLimitEmail === -1) {
        await sails.services.redis.expire(`OTP_${email}`, 60)
      }
      let otp = await Customer.sendOTP(email)
      console.log(otp)
      let user = {
        email: email,
        otp: otp
      }
      let token = sails.helpers.rsa.encrypt(user, 3000)
      return exits.success({
        code: code,
        message: message,
        data: {
          token
        }
      })
    } catch (error) {
      console.log(error);
      return exits.success({
        code: 1,
        message: "Hệ thống đang bận vui lòng đợi một chút"
      })
    }
  }


};
