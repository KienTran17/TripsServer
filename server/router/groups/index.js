const express = require('express');
const router = express.Router();

router.get('/:name', require('../../api/groups/getInfo'))

module.exports = router;