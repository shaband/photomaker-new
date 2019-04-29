class AuthController {

    loginForm(req, res) {
        return res.render('admin/auth/login', {
            layout: false
        });
    }

    login(req, res) {
        console.log(req);
        return res.send(req.body);
    }


}

module.exports = new AuthController;