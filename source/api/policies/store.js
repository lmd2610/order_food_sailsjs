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
        let storeInfo = await sails.helpers.jwt.verify(auth[1])
        let accountInfo = await Account.findOne({typeId:storeInfo.data.id, type:1})
        if(!accountInfo){
            return res
            .status(403)
            .json(
                { code: 403}
            );
        }
        req.storeInfo = storeInfo.data
        req.typeUser = 1
        return next();
    } catch (err) {
        return res
            .status(403)
            .json(
                { code: 403}
            );
    }
};