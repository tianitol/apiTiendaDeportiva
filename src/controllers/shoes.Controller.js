const shoeServices = require('../services/shoeServices');

const getShoes = async (req,res)=>{
    try {
        console.log("Entré al controllers");
        const shoes = await shoeServices.getShoes();
        if (shoes.length === 0) {
            return res.status(404).json({error:"Elemento no encontrado"})
        }
        res.status(201).json(shoes)
    } catch (error) {
        res.status(400).json({error:'Error en la base de datos'})
    }
};

//crear zapato
const createShoe = async (req,res) => {
    try {
        const createShoe = await shoeServices.createShoe(req,res);
        console.log('Shoe creado correctamente', createShoe);
        res.status(201).json(createShoe);
    } catch (error) {
        console.error("Error al crear un zapato en controller")
        res.status(400).json({error:error.message})
    }
};

module.exports = {
    getShoes,
    createShoe
}