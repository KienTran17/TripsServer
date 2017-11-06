let express = require('express');
let router = express.Router();

router.get('/:name', require('../../api/groups/getInfo'))

module.exports = router;