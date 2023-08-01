const shoeServices = require('../services/shoeServices');
//post
const getShoes = async (req,res)=>{
    try {
        //console.log("Entré al controllers");
        const shoes = await shoeServices.getShoes();
        if (shoes.length === 0) {
            return res.status(404).json({error:"Elemento no encontrado"})
        }
        res.status(201).json(shoes)
    } catch (error) {
        res.status(400).json({error:'Error en la base de datos'})
    }
};

//crear zapato create
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
//get
const getShoeById = async (req,res) =>{
    const shoeId = req.params.id;
    console.log(shoeId);
    try {
        const shoe = await shoeServices.getShoeById(shoeId);
        console.log(shoe);
        if (!shoe) {
            return res.status(404).json({error:'Zapato no encontrado'})
        }
        res.status(201).json(shoe);
    } catch (error) {
        res.status(400).json({error:'Error en zapato'})
    }
};

//put
const updateShoeById = async (req,res) =>{
    const shoeId = req.params.id;
    //console.log(shoeId)
    try {
        const updateShoe = await shoeServices.updateShoeByIdS(shoeId, req.body);
        if (!updateShoe) {
            return res.status(404).json({error:' Zapato no encontrado controller'})
        }
        res.status(201).json(updateShoe)
    } catch (error) {
        res.status(400).json({error:'Error al actualizar zapato'})
    }
};
const deleteShoeById = async(req,res) =>{
    const shoeId = req.params.id;
    console.log("delete", shoeId);
    try {
        const deleteShoe = await shoeServices.deleteShoeById(shoeId);
        if (!deleteShoe) {
            console.log()
        }
        res.status(201).json({message: 'Zapato borrado'})
    } catch (error) {
        res.status(400).json({error:'Error al eliminar zapato'});
    }
};

module.exports = {
    getShoes,
    createShoe,
    getShoeById, 
    updateShoeById,
    deleteShoeById
    
}