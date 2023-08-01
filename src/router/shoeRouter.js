const express = require('express');
const router = express.Router();
const controllers = require('../controllers/shoes.Controller');
const middlewares = require('../middlewares/validateShoe');

router.post('/shoes', middlewares.validateCreateShoe ,controllers.createShoe); //crear
router.get('/shoes/:id', middlewares.validateGetShoeById, controllers.getShoeById); //editar shoes por id
router.get('/shoes', controllers.getShoes); //listar shoes
router.put('/shoes/:id',middlewares.validateUpdateShoe, controllers.updateShoeById);//actualizar por id
router.patch('/shoes/:id') //actualizar parcialmente
router.delete('/shoes/:id', middlewares.validateDeleteShoe, controllers.deleteShoeById); //eliminar



module.exports = router;


