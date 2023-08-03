const AccessoryModel = require("../models/Accessory");

// console.log(AccessoryModel);

// Obtener accesorios
const getAccessories = async () => {
  try {
    const accessories = await AccessoryModel.find()

    return accessories

  } catch (error) {
    throw new Error(error)
  }
}

// Crear un nuevo accesorio
const createAccessory = async (accessoryData) => {
  try {
    const newAccessory = new AccessoryModel(accessoryData)

    const savedAccessory = await newAccessory.save()

    return savedAccessory

  } catch (error) {
    throw new Error(error)
  }
}

// Obtener un accesorio
const getAccessoryById = async (id) => {
  try {

    const searchedAccessory = await AccessoryModel.findById(id)

    return searchedAccessory

  } catch (error) {
    throw new Error(error)
  }
}

// Borrar un accesorio
const deleteAccessory = async (id) => {
  try {

    const deletedObj = await AccessoryModel.deleteOne({ _id: id })

    const { deletedCount } = deletedObj

    if (deletedCount < 1) return null

    return true

  } catch (error) {
    throw new Error(error)
  }
}

// Actualizar un accesorio completamente
const fullyUpdateAccessory = async (id, newData) => {
  try {

    const fullyUpdatedAccessory = await AccessoryModel.findOneAndUpdate({ _id: id }, newData)

    return fullyUpdatedAccessory

  } catch (error) {
    throw new Error(error)
  }
}

// Acualizar parcialmente un accesorio
const updateAccessory = async (id, newData) => {
  try {



    await AccessoryModel.updateOne({ _id: id }, newData)

  } catch (error) {
    throw new Error(error)
  }
}

module.exports = {
  getAccessories,
  createAccessory,
  getAccessoryById,
  deleteAccessory,
  fullyUpdateAccessory,
  updateAccessory
}

