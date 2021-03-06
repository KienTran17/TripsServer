const jwt = require('jsonwebtoken');

const SECRET_KEY = "17061995phuotpPphuot51303317";

const verify = (token) => (
    new Promise((resolve, reject) => {
        jwt.verify(token, SECRET_KEY, (e, decoded) => {
            if (e) return reject(e);
            return resolve(decoded);
        })
    })
);


const sign = (input) => (
    new Promise((resolve, reject) => {
        jwt.sign(input, SECRET_KEY, { expiresIn: 36000 }, (e, r) => {
            if (e) return reject(e);
            return resolve(r);
        });
    })
);
module.exports = { sign, verify };