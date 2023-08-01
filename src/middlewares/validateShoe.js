
//create
const validateCreateShoe = (req,res,next) =>{
    const{name, price, image, size, brand, gender} = req.body;
    if (!name || !price ||!image ||!size ||!brand ||!gender) {
        return res.status(400).json({error:'Los campos es obligatorio'})
    }
    next();
};
//get
const validateGetShoeById = (req,res,next) =>{
    const shoeId = req.params.id;
    if (shoeId === 0 || shoeId === '') {
        return res.status(400).json({error:'Debe ingresar el id del zapato en validate'});   
    }
    next();
}

//put
const validateUpdateShoe = (req,res,next) =>{
    const shoeId = req.params.id;
    if (shoeId === 0 || shoeId === '') {
        return res.status(400).json({error:'Debe ingresar el id del evento'})
    }
    next();
};
const validateDeleteShoe = (req,res,next) =>{
    const shoeId = req.params.id;
    if (shoeId === 0 || shoeId === '') {
        return res.status(400).json({error:'Debe ingresar un ID válido'})
    }
    next();
}

module.exports = {
    validateCreateShoe,
    validateGetShoeById,
    validateUpdateShoe,
    validateDeleteShoe

}