const avatar = require('./image');
const router = require('express').Router();

router.use('/image', avatar);

module.exports = router;