const express = require('express');
const miscController = require('../controllers/misc.controller');

const router = express.Router();

router.get('/', miscController.testController);

module.exports = router;