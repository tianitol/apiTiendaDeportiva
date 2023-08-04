const express = require("express");
const { authenticate } = require("../middlewares/auth");
const router = express.Router();

const { login, logeado, logout } = require("../controllers/auth.Controller");

router.post("/login", login);
router.get("/logeado", authenticate, logeado);
router.post("/logout", logout);

module.exports = router;
