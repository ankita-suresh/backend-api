const express= require('express');

const logController = require('../controller/log');

const router = express.Router();

router.get('/',logController.getAllLog);

router.post('/', logController.postLog);

module.exports = router;