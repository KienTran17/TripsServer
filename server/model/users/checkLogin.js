const { checkLogin } = require('../../../config/query');
const changeToken = require('./changeToken')
const bcrypt = require('bcrypt');
module.exports = (username, password) =>
    new Promise((resolve, reject) => {
        checkLogin([username],password)
            .then(res => {
                if (res) {
                    resolve(res)
                }                    
                else
                reject('Invalid username or password!')
            })
    });