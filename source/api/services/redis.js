const asyncRedis = require("async-redis");
const client = asyncRedis.createClient(sails.config.redis);
client.on("ready", function (err) {
  console.log("Redis ===> Ok!");
});
client.runMulti = multi => {
  return new Promise((resolve, reject) => {
    multi.exec((err, replies) => {
      if (err) return reject(err);
      return resolve(replies);
    })
  })
}
client.setExpire = async (key, val, ex) => {
  await client.set(key, val, 'EX', ex)
}
client.getKey = async (key) => {
  return new Promise((resolve, reject) => {
    client.get(key, (err, rs) => {
      if (!err) return resolve(rs);
      return reject(err);
    })
  })
}
client.geoAdd = async (key, long, lat, member) => {
  try {
    await client.geoadd(key, [long, lat, member]);
    return 1;
  } catch (error) {
    return 0;
  }
}
client.geoRadius = async (key, long, lat, radius, sort = 'ASC') => {
  try {
    return await client.georadius(key, [long, lat, radius, 'km', 'WITHDIST', sort]);
  } catch (err) {
    return []
  }
}
module.exports = client;
