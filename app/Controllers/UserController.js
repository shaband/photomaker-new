const User = require('../Models/User');
const {
    check,
    body,
    validationResult
} = require('express-validator/check');

class UserController {

    index(req, res) {
        const users = User.find()
        users.then(users => res.render('admin/users/index', {
            users: users,

        }));
        users.catch(err => res.send(err));
    }
    create(req, res) {

        res.render('admin/users/create')

    }
    store(req, res) {

        // console.log(req);
        const errors = validationResult(req);
        //TODO:: handle error validation
        let user = new User(req.body).save();

        user.then(newUser => {
            res.redirect('/admin/users');
        })
        user.catch(err => res.send(err));

    }
    edit(req, res) {

        res.render('admin/users/create')

    }
    update(req, res) {

        res.render('admin/users/create')

    }
    destroy(req, res) {

        res.render('admin/users/create')

    }

}
module.exports = new UserController