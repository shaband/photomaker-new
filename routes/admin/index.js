const express = require('express');
const router = express.Router();
var UserRoutes = require('@routes/admin/users')
router.use('/', UserRoutes);
module.exports=router