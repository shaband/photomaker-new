const express = require('express');
const router = express.Router();
const UserRoutes = require('@routes/admin/users');
// const {removeLayout}= require('@middlware/middleware');
const authController =require('@controllers/AuthController');

router.use('/', UserRoutes);

router.get('/login',authController.loginForm);
router.post('/login',authController.login);

module.exports=router