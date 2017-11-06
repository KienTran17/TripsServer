const { sign } = require('../../../config/jwt');
const checkLogin = require('../../model/users/checkLogin')
const changeToken = require('../../model/users/changeToken')
module.exports = (req, res, next) => {
    const { username, password } = req.body;
    checkLogin(username, password)
        .then(loged => {
            if (loged === true)
                sign({ username })
                    .then(token => {
                        changeToken(username, token).then(isOk => {
                            if (isOk) {
                                req.session.token = token;
                                res.send(token)
                            }
                        })
                    })
                    .catch(err => res.send(err + ''))
        })
        .catch(err => {
            res.send(err)
        })
}