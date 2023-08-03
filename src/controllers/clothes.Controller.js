const clothesService = require("../services/clothesService");

async function getClothes(req, res) {
  try {
    let clothes = await clothesService.getClothes();
    res.status(200).json(clothes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function getGarmentById(req, res) {
  try {
    let { id } = req.params;
    let garment = await clothesService.getGarmentById(id);
    res.status(200).json(garment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function createGarment(req, res) {
  try {
    const { name, color, size, price, description, image } = req.body;
    let data = { name, color, size, price, description, image };
    let createdGarment = await clothesService.createGarment(data);

    if (createdGarment) {
      res.status(201).json(createdGarment);
    } else {
      res.status(400).json({ message: "the garment was not created" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function deleteGarmentById(req, res) {
  try {
    const id = req.params.id;

    let deletedGarment = await clothesService.deleteGarmentById(id);
    if (deletedGarment) {
      res.status(200).json(deletedGarment);
    } else {
      res.status(400).json({ message: "the garment was not deleted" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function updatedGarment(req, res) {
  try {
    const { _id, name, color, size, price, description, image } = req.body;
    let data = { name, color, size, price, description, image };

    if (_id) {
      let updatedGarment = await clothesService.updateGarment(_id, data);
      if (updatedGarment) {
        res.status(200).json(updatedGarment);
      } else {
        res.status(400).json({ message: "the Garment was not updated" });
      }
    } else {
      res.status(404).json({ message: "Data error, id is not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function updatedCompleteGarment(req, res) {
  try {
    const { _id, name, color, size, price, description, image } = req.body;
    let data = { name, color, size, price, description, image };
    //MIDLEWARE que compruebe que se agreguen todos los atributos en el body para actualizar
    //MIDLEWARE que compruebe que exista el id
    let updatedGarment = await clothesService.updateGarment(_id, data);
    if (updatedGarment) {
      res.status(200).json(updatedGarment);
    } else {
      res.status(400).json({ message: "the Garment was not updated" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  getClothes,
  getGarmentById,
  createGarment,
  deleteGarmentById,
  updatedGarment,
  updatedCompleteGarment,
};
