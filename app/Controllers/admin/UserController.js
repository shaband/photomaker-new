const User = require('@models/User');
const bcrypt = require('bcrypt');
class UserController {

    index(req, res) {
        //     console.log(req);
        const users = User.find()
        users.then(users => {


            res.render('admin/users/index', {
                users: users,
            })
        });
        users.catch(err => res.send(err));
    }
    create(req, res) {

        res.render('admin/users/create')

    }
    store(req, res) {

        // console.log(req);

        let user = new User(req.body).save();

        user.then(newUser => {

            req.flash('success', 'تم الاضافه بنجاح');

            res.redirect('/admin/users');
        })
        user.catch(err => res.send(err));

    }
    edit(req, res) {

        let user = User.findById(req.params.id)
        return user.then(user => {

            return res.render('admin/users/edit', {
                user
            })
        }).catch(err => res.send(err));

    }
    update(req, res) {
        //  delete req.body.password;
        console.log(req.body.password.trim())
        if (req.body.password.trim() == null || req.body.password.trim() == "") {
            delete req.body.password;
            delete req.body.confirmPassword;
        } else {
            let hashPassword = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
            // console.log(hashPassword);
            req.body.password = hashPassword
            console.log(req.body);

        }

        /*  let user = User.findByIdAndUpdate(req.params.id, req.body)
        return user.then(user => {

            req.flash('success', 'تم التعديل بنجاح')

            return res.redirect('/admin/users')
        }).catch(err => res.send(err))
 */

        //   res.render('admin/users/create')

    }
    destroy(req, res) {

        let user = User.findByIdAndRemove(req.params.id)

        return user.then(user => {
            req.flash('success', 'تم الحذف بنجاح')
            return res.redirect('/admin/users')
        }).catch(err => res.send(err))


    }



}
module.exports = new UserController