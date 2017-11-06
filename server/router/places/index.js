let express = require('express');
let router = express.Router();

router.get('/:address', require('../../api/places/getInfo'))

router.post('/addplaces', require('../../api/places/addPlaces'))
module.exports = router;