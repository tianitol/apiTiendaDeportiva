const accessoryServices = require('../services/accessoryServices');

// Obtener todos
const getAccessories = async (req, res) => {
  try {
    const accessories = await accessoryServices.getAccessories()
    res.status(200).json(accessories)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

// Crear un nuevo
const createAccessory = async (req, res) => {
  try {
    const { name, category, description, image, price } = req.body

    const savedAccessory = await accessoryServices.createAccessory({
      name,
      category,
      description,
      image,
      price
    })

    if (savedAccessory) {
      res.status(201).json({ message: 'Accesorio creado exitosamente.', savedAccessory })
    }

  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

// Obtener uno
const getAccessoryById = async (req, res) => {
  try {
    const { id } = req.params

    const searchedAccessory = await accessoryServices.getAccessoryById(id)

    if (searchedAccessory) {
      res.status(200).json(searchedAccessory)

    } else {
      res.status(400).json({ message: 'No se encontró el accesorio.' })
    }

  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

// Borrar uno
const deleteAccessory = async (req, res) => {
  try {
    const { id } = req.params

   const response = await accessoryServices.deleteAccessory(id)

   if (!response) return res.status(400).json({ message: 'No se encontró el accesorio.' })

    res.status(200).json({ message: 'Accesorio eliminado exitosamente.' })

  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

// Actualizar un accesorio completamente 
const fullyUpdateAccessory = async (req, res) => {
  try {
    const { id } = req.params
    const { name, category, description, image, price } = req.body

    await accessoryServices.fullyUpdateAccessory(id, {
      name,
      category,
      description,
      image,
      price
    })

    res.status(200).json({ message: 'Accesorio actualizado exitosamente.' })

  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

// Acualizar parcialmente un accesorio
const updateAccessory = async (req, res) => {
  try {
    const { id } = req.params

    if ((Object.keys(req.body).length === 0)) {
      res.status(400).json({ message: 'Cuerpo de la solicitud sin datos.' })

    } else {
        const { name, category, description, image, price } = req.body

      await accessoryServices.updateAccessory(id, {
        name,
        category,
        description,
        image,
        price,
      })

      res.status(200).json({ message: 'Accesorio actualizado exitosamente.' })
    }

  } catch (error) {
    res.status(500).json({ error: error.message })
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