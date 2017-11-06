const { sign } = require('../../../config/jwt');
const register = require('../../model/users/register');
const bcrypt = require('bcrypt')
module.exports = (req, res, next) => {
    const {
        username,
        twitter_link,
        phone,
        password,
        nickname,
        last_name,
        instagram_link,
        google_link,
        flick_link,
        first_name,
        facebook_link,
        email,
        cover_link,
        birthday,
        avatar_link,
        address
    } = req.body;
    bcrypt.hash(password, 10, (err, hash) => {
        register(username, twitter_link, phone, hash, nickname, last_name,
            instagram_link, google_link, flick_link, first_name, facebook_link,
            email, cover_link, birthday, avatar_link, address)
            .then(isOk => {
                if (isOk === true)
                    sign({ username })
                        .then(token => {
                            req.session.token = token;
                            res.send(token)
                        })
                        .catch(err => console.log(err + ''))
            })
            .catch(err => {
                res.send(err)
            })
    })

}