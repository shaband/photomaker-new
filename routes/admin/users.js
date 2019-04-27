const express = require('express');
const router = express.Router();
const UserController = require('@controllers/UserController')
const {
    createUserValidation,
    updateUserValidation
} = require('@validator/userValidation');
const {
    validation
} = require('@middlware/middleware')
router.get('/users', UserController.index);
router.get('/users/create', UserController.create);
router.post('/users', createUserValidation, validation, UserController.store);
router.get('/users/:id/edit', UserController.edit);
router.put('/users/:id', updateUserValidation, validation, UserController.update);
router.delete('/users/:id', UserController.destroy);


module.exports = router;