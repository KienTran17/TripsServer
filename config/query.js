const { queryDB } = require('./connect');
const bcrypt = require('bcrypt')
//selectAll(['table_Name'])
const selectAll = (table) => (
    new Promise((resolve, reject) => {
        const sql = `select * from "${table}"`;
        queryDB(sql, [])
            .then(res => resolve(res.rows))
            .catch(err => reject(err + ''))
    })
)
//selectAObject(['table_Name',id_Object])
const selectAObject = (table, arrayData) => (
    new Promise((resolve, reject) => {
        const sql = `select * from "${table}" where id = $1`;
        queryDB(sql, arrayData)
            .then(res => resolve(res.rows))
            .catch(err => reject(err + ''))
    })
)

const checkLogin = (arrayData, password) => (
    new Promise((resolve, reject) => {
        const sql = `select username, twitter_link, phone, password, nickname, last_name, instagram_link, id, google_link, flick_link, first_name, facebook_link, email, date_create, cover_link, birthday, avatar_link, address, token from "users" where username=$1`;
        queryDB(sql, arrayData)
            .then(res => {
                bcrypt.compare(password, res.rows[0].password, (err, isTrue) => {
                    delete res.rows[0].password;
                    delete res.rows[0].token;
                    if (isTrue) resolve(res.rows[0])
                    else resolve(undefined)
                })
            })
            .catch(err => reject(err + ''))
    })
)

// checkLogin(['kientran', '123456'])
// .then(res => {
//     if (res.length === 1)
//         console.log(res)
//         else
//         console.log('Invalid username or password!')
// })
module.exports = { checkLogin, selectAObject, selectAll }