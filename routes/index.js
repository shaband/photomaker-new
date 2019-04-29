const express = require('express');
const router = express.Router();
const adminRoutes = require('@routes/admin/index')
const websiteRoutes = require('@routes/website/index')
router.use('/admin', adminRoutes);
router.use('/', websiteRoutes);
module.exports = router;