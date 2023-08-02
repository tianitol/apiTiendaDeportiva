const express = require('express');
const router = express.Router();
const { validateAccessoryData, validateId } = require('../middlewares/validateAccessory');

const {
    getAccessories,
    getAccessoryById,
    createAccessory,
    fullyUpdateAccessory,
    updateAccessory,
    deleteAccessory } = require('../controllers/accessoryController');

router.post('/accessories', validateAccessoryData, createAccessory); //crear

router.get('/accessories/:id', validateId, getAccessoryById); //traer por id

router.get('/accessories', getAccessories); //listar 

router.put('/accessories/:id', validateId, validateAccessoryData, fullyUpdateAccessory);//actualizar por id

router.patch('/accessories/:id', validateId, updateAccessory) //actualizar parcialmente

router.delete('/accessories/:id', validateId, deleteAccessory); //eliminar

module.exports = router;