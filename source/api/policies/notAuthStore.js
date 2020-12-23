module.exports = async (req, res, next) => {
    try {
        req.typeUser = '1'
        return next();
    } catch (err) {
        return res
            .status(403)
            .json(
                { code: 403}
            );
    }
};