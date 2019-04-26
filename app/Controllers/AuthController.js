class AuthController {

    loginForm(req, res) {
        return res.render('admin/auth/login',{layout:false});
    }

    login(req, res) {
        res.send(req);

        //        return res.render('admin/auth/login');
    }


}

module.exports = new AuthController;