const mongoose = require('mongoose');
const User = require('../models/User');
//const bcrypt = require('bcrypt');

const createUser = async (req,res) => {
    const {user, password, email} = req.body;
    try {
        console.log("Acá llega el service", user);
        const userSave = new User({
            user,
            password,
            email
        })
        userSave.save();
        return userSave;
    } catch (error) {
        console.log('Error al guardar el usuario', error);
        throw new Error('Error al guardar el usuario en el service de la bd');
    }
};
const getAllUserById = async () =>{
    try {
        const allUsers = await User.find();
        if (allUsers.length === 0 ) {
            return null;
        }
        console.log('Usuarios no encontrado', allUsers);
        return allUsers;
    } catch (error) {
        console.error('Error al obtener el usuario',error);
        throw new Error('Error al obtener los usuario en la bd');
    }
};

const getUserById = async (userId) =>{
    try {
        const userById = await User.findById(userId);
        if (!userById) {
            return null;
        }
        console.log('Usuario encontrado', userById);
        return userById;
    } catch (error) {
        console.error('Error al obtener el usuario');
        throw new Error('Error al encontrar al usuario en la base de datos');
    }
};

const updateUserById = async (userId, userBody) =>{
    try {
        const updateUser = await User.findByIdAndUpdate(userId,userBody, {new:true});
        console.log("LLega el actualizar", userBody)
        if (!updateUser) {
            return null;
        }
        return updateUser;
    } catch (error) {
        console.log("LLega el actualizar", updateUser)
        throw new Error('Error al actualizar el usuario en la bd')
    }
};
const deleteUserById = async(userId) =>{
    try {
        const deleteUser = await User.findByIdAndDelete(userId);
        if (!deleteUser) {
            return null;
        }
        return deleteUser;
    } catch (error) {
        throw new Error('Error al eliminar el usuario de la base de datos');
    }
};
module.exports = {
    createUser,
    getAllUserById,
    getUserById, 
    updateUserById,
    deleteUserById
}


