const {
    validationResult
} = require('express-validator/check');


function validation(req, res, next) {

    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors_array = validationResult(req);
    if (!errors_array.isEmpty()) {
        let err = errors_array.array();
        let errors = []
        err.forEach(error => {
            errors.push(`${error.param} : ${error.msg}`)
        });
        req.flash('errors', errors);

        return res.redirect('back')

    }
    next()

}
module.exports = {
    validation
};