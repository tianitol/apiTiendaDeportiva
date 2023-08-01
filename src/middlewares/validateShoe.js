

const validateCreateShoe = (req,res,next) =>{
    const{name, price} = req.body;
    if (!name || !price) {
        return res.status(400).json({error:'Los campos es obligatorio'})
    }
    next();
};

module.exports = {
    validateCreateShoe
}