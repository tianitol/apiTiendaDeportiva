const express = require("express");

const {
  getClothes,
  getGarmentById,
  createGarment,
  deleteGarmentById,
  updatedGarment,
  updatedCompleteGarment,
} = require("../controllers/clothes.Controller");

const { validateClothesData, validateIdByParams, validateIdByBody } = require("../middlewares/validateClothes");

//importar Middlewares (comprobar id, params, datos de usuarios logueados, etc)
//importar validaciones para permiso admin (CRUD)

const router = express.Router();

router.get("/clothes", getClothes);
router.get("/clothes/:id", validateIdByParams, getGarmentById);
router.post("/clothes", validateIdByBody, validateClothesData, createGarment);
router.delete("/clothes/:id", validateIdByParams, deleteGarmentById);
router.patch("/clothes", validateIdByBody, updatedGarment);
router.put("/clothes", validateIdByBody, validateClothesData, updatedCompleteGarment);

module.exports = router;
