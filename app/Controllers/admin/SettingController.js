const Setting = require('@models/Setting');
class SettingController {

    index(req, res) {
        let settings = Setting.find()
        return settings.then(data => res.render('admin/settings/index', {
            settings
        })).catch(error => {
            console.log(error)
            return res.send(error);
        })
    }
    edit(req, res) {
        let setting = Setting.findById(req.params.id)
        return setting.then(data => res.render('admin/settings/edit', {
            setting
        })).catch(error => {
            console.log(error)
            return res.send(error);
        })
    }
    update(req, res) {        
        res.send(req.body);
    }


}