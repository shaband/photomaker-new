var express = require('express');
var router = express.Router();
var User = require('@models/User');
var UserController = require('@controllers/UserController');
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', User);
});
router.get('/users/index', UserController.index)

module.exports = router;