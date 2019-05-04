const express = require('express');
const router = express.Router();
const ServiceController = require('@controllers/admin/ServiceController');
const {
    serviceValidation,

} = require('@validator/serviceValidation');
const {
    validation
} = require('@root/app/middleware/validation')
router.get('/services', ServiceController.index);
router.get('/services/create', ServiceController.create);
router.post('/services', serviceValidation, validation, ServiceController.store);
router.get('/services/:id/edit', ServiceController.edit);
router.put('/services/:id', serviceValidation, validation, ServiceController.update);
router.delete('/services/:id', ServiceController.destroy);
module.exports = router;