const express = require('express');
const session = require('express-session');
var cookieParser = require('cookie-parser');
const parser = require('body-parser').urlencoded({ extended: false });


const app = express();
app.use(cookieParser());
app.use(session({ 
    secret: 'key', 
    cookie: { maxAge: 600000 },
    resave: true,
    saveUninitialized: true
}));
app.listen(process.env.PORT || 3000, () => console.log('Server started'));

//route user
app.use('/users', parser, require('./router/users/index'));

//route trip
app.use('/trips', parser, require('./router/trips/index'));

//route place
app.use('/places', parser, require('./router/places/index'));

app.use('/', parser, require('./router/index'));
