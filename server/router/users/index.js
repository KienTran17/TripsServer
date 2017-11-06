const express = require('express');
const router = express.Router();

//uers
router.get('/profile', require('../../api/users/getProfile'));

router.post('/login', require('../../api/users/login'));
router.post('/register', require('../../api/users/register'));

module.exports = router;