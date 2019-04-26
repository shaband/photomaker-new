const passport = require('passport')
    , LocalStrategy = require('passport-local').Strategy;

passport.use('adminStrategy',new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback : true

    },
    function(username, password, done) {
        User.findOne({ username: username }, function (err, user) {
            if (err) { return done(err); }
            if (!user) {
                return done(null, false, { message: 'Incorrect username.' });
            }
            if (!user.validPassword(password)) {
                return done(null, false, { message: 'Incorrect password.' });
            }
            return done(null, user);
        });
    }
));





//---------------------------Local Strategy-------------------------------------
passport.use('admin-signup', new LocalStrategy({
        usernameField : 'email',
        passwordField : 'password',
        passReqToCallback : true
    },
    function(req, email, password, done) {

            User.findOne({email: email}, function(err, user) {
                if(err) {
                    return errHandler(err);
                }
                if(user) {
                    console.log('user already exists');
                    return done(null, false, {errMsg: 'email already exists'});
                }
                else {
                    var newUser = new User();
                    newUser.username = req.body.username;
                    newUser.email = email;
                    newUser.password = newUser.generateHash(password);
                    newUser.save(function(err) {
                        if(err) {
                            console.log(err);
                            if(err.message == 'User validation failed') {
                                console.log(err.message);
                                return done(null, false, {errMsg: 'Please fill all fields'});
                            }
                            return errHandler(err);
                        }
                        console.log('New user successfully created...',newUser.username);
                        console.log('email',email);
                        console.log(newUser);
                        return done(null, newUser);
                    });
                }
            });

    }));
//---------------------------local login----------------------------------------
passport.use('admin-login', new LocalStrategy({
        usernameField : 'email',
        passwordField : 'password',
        passReqToCallback : true
    },
    function(req, email, password, done) {
        User.findOne({email: email}, function(err, user) {
            if(err) {
                return errHandler(err);
            }
            if(!user) {
                return done(null, false, {errMsg: 'User does not exist, please' +
                        ' <a class="errMsg" href="/signup">signup</a>'});
            }
            if(!user.validPassword(password)) {
                return done(null, false, {errMsg: 'Invalid password try again'});
            }
            return done(null, user);
        });

    }));
passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        done(err, user);
    });
});