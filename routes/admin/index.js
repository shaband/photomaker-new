const express = require('express');
const router = express.Router();
const UserRoutes = require('@root/routes/admin/routes/users');
const {
    isAuth,
    isGuest
} = require('@middlware/auth');
const authController = require('@controllers/admin/AuthController');
const HomeController = require('@controllers/admin/HomeController');
const passport = require('passport');

require('@config/auth');
router.get('/login', isGuest, authController.loginForm);
router.post('/login', isGuest, passport.authenticate('admin', {
    successRedirect: '/admin/users',
    failureRedirect: '/admin/login',
    failureFlash: true
}), authController.login);

router.use('/', isAuth, UserRoutes);

router.get('/', isAuth, HomeController.index);
router.get('/logout', isAuth, authController.logout);
module.exports = router