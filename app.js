require('module-alias/register')

const createError = require('http-errors');
const express = require('express');
const path = require('path');
const logger = require('morgan');
const indexRouter = require('@routes/index');
const expressLayouts = require('express-ejs-layouts');
const passport = require('passport');
const app = express();
const ejsLint = require('ejs-lint');
const multer = require('multer')
require('./config/database');
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.set("layout extractScripts", true)
app.set('layout extractStyles', true)
app.set('layout', 'admin/layouts/layout');
app.locals.error = app.locals.error || null;

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
require('./config/session')(app);
require('./config/override')(app);

var storage = multer.memoryStorage()
var upload = multer({
  storage: storage
})

app.use(passport.initialize());
app.use(passport.session());


app.use(express.static(path.join(__dirname, 'public')));

app.use(upload.any());
app.use('/',  indexRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development

  
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error', {
    layout: false
  });
});

module.exports = app;