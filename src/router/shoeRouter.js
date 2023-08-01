const express = require('express');
const router = express.Router();
const controllers = require('../controllers/shoes.Controller');
const middlewares = require('../middlewares/validateShoe');

router.post('/shoes', middlewares.validateCreateShoe ,controllers.createShoe); //crear
router.get('/shoes/:id'); //editar shoes por id
router.get('/shoes', controllers.getShoes); //listar shoes
router.put('/shoes/:id');//actualizar por id
router.patch('/shoes/:id') //actualizar parcialmente
router.delete('/shoes/:id'); //eliminar



module.exports = router;


