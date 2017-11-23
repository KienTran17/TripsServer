const { sign } = require('../../../config/jwt');
const checkLogin = require('../../model/users/checkLogin')
const changeToken = require('../../model/users/changeToken')
module.exports = (req, res, next) => {
    const { username, password } = req.body;
    checkLogin(username, password)
        .then(userInfo => {
            if (userInfo)
                sign({ username })
                    .then(token => {
                        changeToken(username, token).then(isOk => {
                            if (isOk) {
                                req.session.token = token;
                                res.cookie('userInfo', {token, userInfo}, { expires: new Date(Date.now() + 2592000)}).send({token, userInfo});
                            }
                        })
                    })
                    .catch(err => res.send(err + ''))
        })
        .catch(err => {
            res.send(err)
        })
}