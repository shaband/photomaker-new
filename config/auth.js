const passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy;
User = require('@models/User');
//---------------------------local login----------------------------------------
passport.use('admin', new LocalStrategy({
        usernameField: "email",
        passwordField: "password",
        passReqToCallback: true
    },
    function (req, email, password, done) {


        User.findOne({
            email: email
        }, function (err, user) {
            if (err) {
                return done(err);
            }
            if (!user) {

                req.flash('errors', ['Incorrect email.'])
                return done(null, false, {
                    message: 'Incorrect email.'
                });
            }


            if (!user.comparePassword(password)) {
                req.flash('errors', ['Incorrect email.'])
                return done(null, false, {
                    message: 'Incorrect password.'
                });
            }
            return done(null, user);
        });
    }
));
passport.serializeUser(function (user, done) {
    done(null, user.id);
});

passport.serializeUser(function(user, done) {
    done(null, user.id);
  });
  
  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });
