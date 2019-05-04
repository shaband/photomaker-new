const {
  check
} = require('express-validator/check');


serviceValidation = [
  check('name_ar').exists().isString().isLength({
    min: 1
  }),
  check('name_en').exists().isString().isLength({
    min: 1
  }),
  check('value_en').exists().isString().isLength({
    min: 1
  }),
  check('value_ar').exists().isString().isLength({
    min: 1
  }),

]


module.exports = {
  serviceValidation,

}