const express = require('express');
const miscRoutes = require('./misc_routes.js');

// All route definitions
const router = express.Router();
router.use('/misc', miscRoutes);

module.exports = router;