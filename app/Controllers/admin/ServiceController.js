const Service = require('@models/Service');
const bcrypt = require('bcrypt');
class ServiceController {
    index(req, res) {
        const services = Service.find()
        services.then(services => {
            res.render('admin/services/index', {
                services: services,
            })
        });
        services.catch(err => res.send(err));
    }
    create(req, res) {
        res.render('admin/services/create')
    }
    store(req, res) {

        let Service = new Service(req.body).save();

        return Service.then(newService => {

            req.flash('success', 'تم الاضافه بنجاح');

            res.redirect('/admin/services');
        }).catch(err => res.send(err))


    }
    edit(req, res) {

        let Service = Service.findById(req.params.id)
        return Service.then(Service => {

            return res.render('admin/services/edit', {
                Service
            })
        }).catch(err => res.send(err));

    }
    update(req, res) {
        let Service = Service.findByIdAndUpdate(req.params.id, req.body)
        return Service.then(Service => {
            req.flash('success', 'تم التعديل بنجاح')
            return res.redirect('/admin/services')
        }).catch(err => res.send(err))


    }
    destroy(req, res) {

        let Service = Service.findByIdAndRemove(req.params.id)

        return Service.then(Service => {
            req.flash('success', 'تم الحذف بنجاح')
            return res.redirect('/admin/services')
        }).catch(err => res.send(err))
    }



}
module.exports = new ServiceController