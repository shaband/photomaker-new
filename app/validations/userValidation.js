const {
  check
} = require('express-validator/check');

function confirmPassowrd(value, {
  req
}) {
  if (value === req.body.confirmPassword) {
    return true;
  } else {
    return false;
  }
}
createUserValidation = [
  check('name').exists().isString().isLength({
    min: 1
  }),
  check('email').exists().isEmail(),
  check('password').exists().isLength({
    min: 6
  }).custom(confirmPassowrd)
]

module.exports = {
  createUserValidation

}