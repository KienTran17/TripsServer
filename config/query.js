const { queryDB } = require('./connect');
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

const checkLogin = (arrayData) => (
    new Promise((resolve, reject) => {
        const sql = `select * from "users" where username=$1 and password=$2`;
        queryDB(sql, arrayData)
            .then(res => resolve(res.rows))
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