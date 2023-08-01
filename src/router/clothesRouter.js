const express = require("express");

const {
  getClothes,
  getGarmentById,
  createGarment,
  deleteGarmentById,
  updatedGarment,
  updatedCompleteGarment,
} = require("../controllers/clothes.Controller");

//importar Middlewares (comprobar id, params, datos de usuarios logueados, etc)
//importar validaciones para permiso admin (CRUD)

const router = express.Router();

router.get("/clothes", getClothes);
router.get("/clothes/:id", getGarmentById);
router.post("/clothes", createGarment);
router.delete("/clothes/:id", deleteGarmentById);
router.patch("/clothes", updatedGarment);
router.put("/clothes", updatedCompleteGarment);

module.exports = router;
