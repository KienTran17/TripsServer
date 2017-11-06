const getProfile = require('../../model/users/getProfile')
const { verify } = require('../../../config/jwt')
module.exports = (req, res, next) => {
    const { token } = req.session;
    getProfile(token)
        .then(obj => res.send(obj))
        .catch(err => res.send('error'))

}