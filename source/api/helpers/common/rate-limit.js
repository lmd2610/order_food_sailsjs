module.exports = {


  friendlyName: 'Rate limit',


  description: '',


  inputs: {
    url: { type: 'string' },
    userId: { type: 'string' }
  },


  exits: {

    success: {
      description: 'All done.',
    },

  },


  fn: async function (inputs, exits) {
    let { url, userId } = inputs;
    let timeMinute = Math.ceil(Date.now() / (1000 * 60));
    await sails.services.redis.hincrby(`user_minute_${url}_${userId}`, `${timeMinute}`, 1);
    await sails.services.redis.incrby(`user_hour_${url}_${userId}`, 1);

    let checkRateLimitHour = await sails.services.redis.get(`user_hour_${url}_${userId}`);
    if (Number(checkRateLimitHour) > 20 * 40) {
      
      throw "rate_limit_hour";
    }
    let checkRateLimitMinute = await sails.services.redis.hget(`user_minute_${url}_${userId}`, `${timeMinute}`);
    if (Number(checkRateLimitMinute) >  10) {
      throw "rate_limit_minute";
    }
    let ttlLimitMinute = await sails.services.redis.ttl(`user_minute_${url}_${userId}`);
    let ttlLimitHour = await sails.services.redis.ttl(`user_hour_${url}_${userId}`);
    if (ttlLimitMinute === -1) {
      await sails.services.redis.expire(`user_minute_${url}_${userId}`, 60 * 60)
    }
    if (ttlLimitHour === -1) {
      await sails.services.redis.expire(`user_hour_${url}_${userId}`, 60 * 60)
    }
    return exits.success();

  }
};

