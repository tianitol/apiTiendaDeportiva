const userServices = require('../services/userServices');



//funcion para crear usuario
const createUser = async (req,res) =>{
    try {
        console.log("datos recibidos en el controlador", req.body);
        const saveUser = await userServices.createUser(req,res);
        //console.log('Usuario creado en el controller');
        res.status(201).json(saveUser);
    } catch (error) {
        res.status(400).json({error: 'Error al crear el usuario en la bd'});
    }
};

//listar los users
const getAllUsers = async(req,res) =>{
    const userId = req.params.id; //obtiene el id del usuario
    try {
        const allUsers = await userServices.getAllUserById(userId);
        if (!allUsers) {
            return res.status(404).json({error:"Usuario no encontrado", error});
        }
        res.status(200).json(allUsers);
    } catch (error) {
        console.error('Error al obtener el usuario');
        return res.status(400).json({error:"Usuario no encontrado", error});
    }
};
const getUserById = async(req,res) =>{
    const userId = req.params.id;
    try {
        const userById = await userServices.getUserById(userId);
        if (!userById) {
            return res.status(404).json({error:"Usuario no encontrado"});
        }
        res.status(200).json(userById)
    } catch (error) {
        console.error('Error al obtener usuario');
        res.status(400).json({error:'Error al obtener usuario en la bd'});
    }
};
const updateUserById = async(req,res) =>{
    const userId = req.params.id;
    try {
        const updateUser = await userServices.updateUserById(userId,req.body);
        if (!updateUser) {
            return res.status(404).json({error:'Usuario no existen en controller'});
        }
        res.status(200).json(updateUser)
    } catch (error) {
        res.status(400).json({error:'Error al actualizar el usuario en la bd'})
    }
};
const deletetUserById = async (req,res) =>{
    const userId = req.params.id;
    try {
        const deleteUser = await userServices.deleteUserById(userId);
        if (!deleteUser) {
            console.log('llegue al delete', deleteUser);
            return res.status(404).json({error:'Usuario no encontrado'});
        }
        console.log('Usuario eliminado', userId);
        res.status(201).json({message:'Usuario eliminado correctamente'});
    } catch (error) {
        res.status(400).json({error:'Error al eliminar el usuario'});
    }
};

module.exports = {
    createUser,
    getAllUsers,
    getUserById,
    updateUserById,
    deletetUserById
}