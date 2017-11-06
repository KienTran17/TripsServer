const express = require('express');
const router = express.Router();

//trips
router.get('/:address', require('../../api/trips/getInfo'))

router.post('/addtrips', require('../../api/trips/addTrip'))

module.exports = router;