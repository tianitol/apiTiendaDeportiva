const Shoe = require('../models/Shoe');

const getShoes = async () =>{
    try { 
        console.log("Entré al servicio");
        const shoes = await Shoe.find(); //traer del modelo Shoe
        if (shoes.length ===0) { //valida que el largo no sea 0
            return null;
        }
        return shoes
    } catch (error) {
        throw new Error(error);
    }
};
const createShoe = async(req,res) =>{
    const primaryShoe = new Shoe({
        name : req.body.name,
        price: req.body.price,
        description:req.body.description,
        image:req.body.image,
        size:req.body.size,
        brand:req.body.brand,
        gender:req.body.gender
    });
    console.log("Llega hasta guardar el zapato");
    try {
        const createShoe = await primaryShoe.save(); //guardo la shoe en una variable llamada primaryShoe en la variable createShoe
        return createShoe; //retorno la varible con los elementos
    } catch (error) {
        console.log("Error al guardar el zapato", error);
        throw new Error(error)
    }
};
//get
const getShoeById = async (shoeId) =>{
    try {
        const shoe = await Shoe.findById(shoeId);
        if (!shoe) {
            return null;
        }
        return shoe;
    } catch (error) {
        throw new Error('Error al obtener el zapato completo')
    }
};

//put
const updateShoeByIdS = async(shoeId, data)=>{
    try {
        console.log("llego acá", shoeId);
        const updateShoe = await Shoe.findOneAndUpdate({_id: shoeId}, data);
        if (!updateShoe) {
        return null;
    }
        return updateShoe; 
    } catch (error) {
        throw new Error('Error al encontrar zapato');
    }
};
//DELETE
const deleteShoeById = async (shoeId) =>{
    try {
        const deleteShoe = await Shoe.findByIdAndDelete(shoeId);
        console.log(deleteShoe);
        if (!deleteShoe) {
            return null;
        }
        return deleteShoe;
    } catch (error) {
        throw new Error('Error al encontrar zapato')
    }
}




module.exports = {
    getShoes,
    createShoe,
    getShoeById,
    updateShoeByIdS,
    deleteShoeById
}