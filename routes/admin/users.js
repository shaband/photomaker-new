const express = require('express');
const router = express.Router();
const UserController = require('@controllers/UserController')
const {
    createUserValidation
} = require('@validator/userValidation');

router.get('/users', UserController.index);
router.get('/users/create', UserController.create);
router.post('/users', createUserValidation,UserController.store);
router.get('/users/:id/edit', UserController.edit);
router.put('/users/:id', UserController.update);
router.delete('/users/:id', UserController.destroy);


module.exports = router;