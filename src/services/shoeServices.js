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
        image:req.body.image
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




module.exports = {
    getShoes,
    createShoe
}