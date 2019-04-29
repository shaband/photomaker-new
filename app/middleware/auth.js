exports.isAuth = function (req, res, next) {
  if (req.isAuthenticated()) {
    console.log(req.locals);
    console.log(req.user)
    res.locals.user = req.user;
    return next()
  }
  return res.redirect('/admin/login')

}

exports.isGuest = (req, res, next) => {
  if (req.isUnauthenticated()) {
    return next();
  }
  return res.redirect("/admin/users");
};