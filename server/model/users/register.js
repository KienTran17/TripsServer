const { queryDB } = require('../../../config/connect');
module.exports = (username, twitter_link, phone, password, nickname, last_name,
    instagram_link, google_link, flick_link, first_name, facebook_link, 
    email, cover_link, birthday, avatar_link, address) =>
    new Promise((resolve, reject) => {
        queryDB(`INSERT INTO public.users(
            "username", twitter_link, phone, password, nickname, last_name, 
            instagram_link, google_link, flick_link, first_name, facebook_link, 
            email, date_create, cover_link, birthday, avatar_link, address)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17)
            RETURNING "username", twitter_link, phone, password, nickname, last_name, 
            instagram_link, google_link, flick_link, first_name, facebook_link, 
            email, date_create, cover_link, birthday, avatar_link, address;`,
            [username, twitter_link, phone, password, nickname, last_name,
                instagram_link, google_link, flick_link, first_name, facebook_link, 
                email, cover_link, birthday, avatar_link, address])
            .then(val => resolve(val))
            .catch(err => {
                console.log(err)
                reject(false)
            })
    });