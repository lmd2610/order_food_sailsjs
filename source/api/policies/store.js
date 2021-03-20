
module.exports = async function (req, res, next) {


    try {
      if (!req.headers.authorization) {
        return res.forbidden();
      }
      let author = req.headers.authorization
      let split = author.split(" ")
      if (split[0].toLowerCase() !== "bearer") return res.forbidden();
      let adminInfo = await sails.helpers.jwt.verify(split[1])
      req.admin = adminInfo.data;
      next()
    } catch (error) {
      return res.forbidden();
    }
  
  };