const Clothes = require("../models/Clothes");

const getClothes = async () => {
  try {
    let clothing = await Clothes.find();
    return clothing;
  } catch (error) {
    throw new Error(error);
  }
};

const getGarmentById = async (id) => {
  try {
    let garment = await Clothes.findById(id);
    return garment;
  } catch (error) {
    throw new Error(error);
  }
};

const createGarment = async (name, color, size, price, description, image) => {
  try {
    let createdGarment = new Clothes({
      name,
      color,
      size,
      price,
      description,
      image,
    });
    createdGarment.save();

    return createdGarment;
  } catch (error) {
    throw new Error(error);
  }
};

const deleteGarmentById = async (id) => {
  try {
    let deletedGarment = await Clothes.findByIdAndDelete(id);
    return deletedGarment;
  } catch (error) {
    throw new Error(error);
  }
};

const updateGarment = async (
  id,
  { name, color, size, price, description, image }
) => {
  try {
    let updatedGarment = await Clothes.findByIdAndUpdate(id, {
      name,
      color,
      size,
      price,
      description,
      image,
    });
    return updatedGarment;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  getClothes,
  getGarmentById,
  createGarment,
  deleteGarmentById,
  updateGarment,
};
