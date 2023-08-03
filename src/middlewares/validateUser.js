const mongoose = require('mongoose');
const User = require('../models/User');


//expresion regular para validar el formato de correo electrónico y la contraseña
const emailR = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const passwordR = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/;

const validateCreateUser = (req,res,next) =>{
    const {user,password,email} = req.body;
    console.log('Datos recibos', user,password,email);
    //verificar que los campos no estén vacios
    if (!user || ! password || !email) {
        return res.status(400).json({error: 'Complete los datos requeridos'});
        
    }
    if (!emailR.test(email)) {
        return res.status(400).json({error:"El formato es incorrecto"});

    }
    if(!passwordR.test(password)){
        return res.status(400).json({error:'constraseña incorrecta'});
    }
    next();
};
const validateGetById = (req,res,next) =>{

    const userId = req.params.id;
    //console.log("ACAAAA",userId);
    //const {id} = req.params;
    //verificar que el id no esté vacion o en 0
    if (!userId === 0 || !userId ==='') {
        return res.status(400).json({error:'Debe ingresar el id del usuario'})
    }
    next();
};
const validateUpdateUser = (req,res,next) =>{
    const userId = req.params.id;
    console.log(userId)
    const{user,password,email} = req.body;
    console.log("Acá llega", user,password,email)
    if (!user || !password || !email) {
        return res.status(400).json({error:'Complete los datos requeridos'})
    }
    // vericar que el formato sea correcto
    if (!emailR.test(email)) {
        return res.status(400).json({error:'El formato del email es invalido'});
    }
    if (!passwordR.test(password)) {
        return res.status(400).json({error:'La contraseña es inválida'});
    }
    next();
}
const validateDeleteUser = (req,res,next) =>{
    const userId = req.params.id;
    // verificar id del usuario no sea 0 o string vacio
    if (!userId === 0 || !userId ==='' ) {
        return res.status(400).json({error:'Debe ingresar un id valido'});
    }
    next();
}


module.exports = {
    validateCreateUser,
    validateGetById,
    validateUpdateUser,
    validateDeleteUser
}


