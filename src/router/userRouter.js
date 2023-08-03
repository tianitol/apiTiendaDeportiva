const express = require('express');
const router = express.Router();
const controller = require('../controllers/user.Controller');
const middleware = require('../middlewares/validateUser');

router.post('/create', middleware.validateCreateUser, controller.createUser );
router.get('/users', controller.getAllUsers);
router.get('/user/:id', middleware.validateGetById ,controller.getUserById);
router.put('/user/:id', middleware.validateUpdateUser, controller.updateUserById);
router.patch('/user:id');
router.delete('/user/:id', middleware.validateDeleteUser, controller.deletetUserById);

module.exports = router;