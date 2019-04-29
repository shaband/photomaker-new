 class HomeController {

     index(req, res) {

         res.render('admin/index');
     }

 }

 module.exports = new HomeController;