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
        let accountInfo = await Account.findOne({id:storeInfo.data.id})
        if(accountInfo.type !== 'store'){
            return res
            .status(403)
            .json(
                { code: 403}
            );
        }
        req.storeInfo = storeInfo.data
        req.typeUser = 'store'
        return next();
    } catch (err) {
        return res
            .status(403)
            .json(
                { code: 403}
            );
    }
};