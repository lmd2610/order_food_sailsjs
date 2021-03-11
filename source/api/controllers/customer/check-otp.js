module.exports = {


  friendlyName: 'Check otp',


  description: '',


  inputs: {
    token: { type: 'string' },
    code: { type: 'string' }
  },


  exits: {

  },


  fn: async function (inputs, exits) {
    let { token, code } = inputs

    try {
      let codeCheck = sails.helpers.rsa.verify(token)
      let checkBlockEmail = await sails.services.redis.get(`CHECK_OTP_BLOCK_${codeCheck.email}_${codeCheck.code}`)
      if (checkBlockEmail) {
        return exits.success({
          code: 1,
          message: "Vui lòng đợi 30p để đăng nhập lại"
        })
      }
      await sails.services.redis.incrby(`CHECK_OTP_${codeCheck.email}_${codeCheck.code}`, 1);
      let checkRateLimitOTP = await sails.services.redis.get(`CHECK_OTP_${codeCheck.email}_${codeCheck.code}`);

      if (Number(checkRateLimitOTP) > 3) {

        return exits.success({
          code: 1,
          message: "Bạn thao tác quá nhanh"
        })

      }
      let ttlLimitEmail = await sails.services.redis.ttl(`CHECK_OTP_${codeCheck.email}_${codeCheck.code}`);
      if (ttlLimitEmail === -1) {
        await sails.services.redis.expire(`CHECK_OTP_${codeCheck.email}_${codeCheck.code}`, 60)
      }
      if (codeCheck.otp !== code) {
        await sails.services.redis.setExpire(`CHECK_OTP_BLOCK_${codeCheck.email}_${codeCheck.code}`, 1, 60 * 30)
        return exits.success({
          code: 1,
          message: "Sai mã OTP vui lòng nhập lại"
        })
      }
      return exits.success({
        code: 0,
        message: "Thành công",
        data: {
          token
        }
      })
    } catch (error) {
      console.log("check-otp: ", error.message)
      if(error.message === "timeout"){
        return exits.success({
          code: 1,
          message: "Phiên làm việc hết hạn vui lòng tạo lại",
  
        })
      }
      else{
        return exits.success({
          code: 1,
          message: "Đã có lỗi xảy ra",
  
        })
      }
      
    }

  }


};
