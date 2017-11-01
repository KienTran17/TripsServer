const express = require('express');
const session = require('express-session');
const parser = require('body-parser').urlencoded({ extended: false });

const app = express();
app.use(session({ 
    secret: 'key', 
    cookie: { maxAge: 600000 },
    resave: true,
    saveUninitialized: true
}));
app.listen(3002, () => console.log('Server started'));

