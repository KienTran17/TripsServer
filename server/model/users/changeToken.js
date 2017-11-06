const { queryDB } = require('../../../config/connect');
module.exports = (username, token) =>
    new Promise((resolve, reject) => {
        const sql = `UPDATE "users"
        SET token = $2
        WHERE "username"=$1;`
        queryDB(sql,[username, token])
        .then(isOk=> resolve(true))
        .catch(err=>reject(err+''))
    });