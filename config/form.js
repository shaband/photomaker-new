const methodOverride = require('method-override')
const multer = require('multer')
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./public/uploads/tmp")
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now())
    }
})

var storage2 = multer.memoryStorage()

const upload = multer({
    storage: storage
})

module.exports = function (app) {
    app.use(upload.any());
    app.use(methodOverride('_method'))
    app.use(methodOverride(function (req, res) {
        if (req.body && typeof req.body === 'object' && '_method' in req.body) {
            // look in urlencoded POST bodies and delete it
            var method = req.body._method
            delete req.body._method
            return method
        }
    }))

}