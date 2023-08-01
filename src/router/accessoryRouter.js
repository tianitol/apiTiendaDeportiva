const express = require('express');
const router = express.Router();
const { validateCreateAccessory } = require('../middlewares/validateAccessory');

const {
    getAccessories,
    getAccessoryById,
    createAccessory,
    fullyUpdateAccessory,
    updateAccessory,
    deleteAccessory } = require('../controllers/accessoryController');

router.post('/accessories', validateCreateAccessory, createAccessory); //crear

router.get('/accessories/:id', getAccessoryById); //traer por id

router.get('/accessories', getAccessories); //listar 

router.put('/accessories/:id', validateCreateAccessory, fullyUpdateAccessory);//actualizar por id

router.patch('/accessories/:id', updateAccessory) //actualizar parcialmente

router.delete('/accessories/:id', deleteAccessory); //eliminar



module.exports = router;