const redis = require("redis");
const client = redis.createClient(sails.config.redis);
client.on("ready", function (err) {
  if(err){
    console.log("Redis ==> Not connected")
  }
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

module.exports = client;
