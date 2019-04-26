
const {validationResult } = require('express-validator/check');


function  validation(req,res ,next) {

    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log({ errors: errors.array() });


        
    }

    next()

}
