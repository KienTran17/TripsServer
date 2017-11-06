const { checkLogin } = require('../../../config/query');
const changeToken = require('./changeToken')
module.exports = (username, password) =>
    new Promise((resolve, reject) => {
        checkLogin([username, password])
            .then(res => {
                if (res.length === 1) {
                    resolve(true)
                }
                else
                    reject('Invalid username or password!')
            })
    });