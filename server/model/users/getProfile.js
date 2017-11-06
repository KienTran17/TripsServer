const { queryDB } = require('../../../config/connect');
module.exports = (token) =>
    new Promise((resolve, reject) => {
        const sql = `select "username", twitter_link, phone, nickname, last_name, instagram_link, id, google_link, flick_link, first_name, facebook_link, email, date_create, cover_link, birthday, avatar_link, address from "users" where token = $1`;
        queryDB(sql, [token])
            .then(res => resolve(res.rows[0]))
            .catch(err => reject(err + ''))
    })