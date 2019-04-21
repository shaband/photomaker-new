const session = require('express-session');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');

var csurf = require('csurf')
var csrfProtection = csurf({
    cookie: true
})
const session_object = {
    secret: process.env.SESSION_SECRET,
    resave: process.env.SESSION_RESAVE,
    saveUninitialized: process.env.SESSION_SAVEUNINITIALIZED,
    cookie: {
        secure: false
    }
}


function passCsrf(req, res, next) {
    res.locals.csrfToken = req.csrfToken();
    res.locals.url = req.get('host');
    next();
};
function globalVariables(req, res, next) {
    res.locals.url = req.get('host');
    next();
};
module.exports = function (app) {
    app.use(cookieParser());
    app.use(session(session_object));
    app.use(flash());
    app.use(csrfProtection)
    app.use(passCsrf)
    app.use(globalVariables)


}