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

        let service = new Service(req.body).save();

        return service.then(newService => {

            req.flash('success', 'تم الاضافه بنجاح');

            res.redirect('/admin/services');
        }).catch(err => res.send(err))


    }
    edit(req, res) {

        let servic = Service.findById(req.params.id)
        return servic.then(Service => {

            return res.render('admin/services/edit', {
                service
            })
        }).catch(err => res.send(err));

    }
    update(req, res) {
        let servic = Service.findByIdAndUpdate(req.params.id, req.body)
        return servic.then(service => {
            req.flash('success', 'تم التعديل بنجاح')
            return res.redirect('/admin/services')
        }).catch(err => res.send(err))


    }
    destroy(req, res) {

        let service = Service.findByIdAndRemove(req.params.id)

        return service.then(Service => {
            req.flash('success', 'تم الحذف بنجاح')
            return res.redirect('/admin/services')
        }).catch(err => res.send(err))
    }



}
module.exports = new ServiceController