const User = require('../Models/User');

class UserController {

    index(req, res) {
        const users = User.find()
        var title = "title";
        users.then(users => res.render('admin/users/index', {
            users: users,

        }));
        users.catch(err => res.send(err));
    }
    create(req, res) {
      
         res.render('admin/users/create')
        
    }

}
module.exports = new UserController