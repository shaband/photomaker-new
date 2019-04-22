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

        const err = body('name').isEmail()
        //const errors = validationResult(req);
        //  res.send(errors)
        console.log(err)
        res.send(req.body);
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