module.exports = async (req, res, next) => {
    try {
 
        let authorization = req.headers.authorization || req.headers.Authorization;
            if (!authorization) {
            return res
                .status(401)
                .json(
                    { code: 403}
                );
        }
        const auth = authorization.split(' ');
        if(auth[0].toLowerCase() !=='bearer'){
            return res
            .status(403)
            .json(
                { code: 403}
            );
        }
        let userInfo = await sails.helpers.jwt.verify(auth[1]);
        let accountInfo = await Account.findOne({typeId:userInfo.data.id, type:3})
        if(!accountInfo){
            return res
            .status(403)
            .json(
                { code: 403}
            );
        }
        req.userInfo = userInfo.data
        req.typeUser = 3
        return next();
    } catch (err) {
        return res
            .status(403)
            .json(
                { code: 403}
            );
    }
};