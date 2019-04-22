var express = require('express');
var router = express.Router();
var adminRoutes = require('@routes/admin/index')
var websiteRoutes = require('@routes/website/index')
router.use('/admin', adminRoutes);
router.use('/', websiteRoutes);
module.exports = router;