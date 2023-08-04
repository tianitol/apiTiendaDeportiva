const jwt = require("jsonwebtoken");

const claveSecreta = "claveSuperSecreta";

const generarToken = (payload) => {
  const token = jwt.sign(payload, claveSecreta, {
    expiresIn: "5m",
  });

  return token;
};

const authenticate = (req, res, next) => {
  try {
    if (req.cookies.tokenUsuario) {
      let jwtDescifrado = jwt.verify(req.cookies.tokenUsuario, claveSecreta);
      //console.log(jwtDescifrado.rol);
      if (jwtDescifrado) {
        next();
      } else {
        res.redirect("http://localhost:5173/login");
      }
    } else {
      res.redirect("http://localhost:5173/login");
    }
  } catch (error) {
    console.error("Error al verificar el token: ", error);
    res.redirect("http://localhost:5173/login");
  }
};

module.exports = {
  generarToken,
  authenticate,
};
