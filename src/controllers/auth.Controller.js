const as = require("../services/authService");
const { generarToken } = require("../middlewares/auth");

async function login(req, res) {
  try {
    let { email, password } = req.query;

    let usuario = await as.login(email);

    if (usuario) {
      if (usuario.password === password) {
        let objUser = {
          id: usuario._id,
          user: usuario.user,
          email: usuario.email,
        };

        let token = generarToken(objUser);
        console.log(token);
        res.cookie("tokenUsuario", token).send("Logueado Satisfactoriamente");
      } else {
        res.status(400).json("El correo y la contraseña no coinciden");
      }
    } else {
      res.status(400).json({ mensaje: "Usuario no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function logeado(req, res) {
  try {
    let cookies = req.cookies;
    res.status(200).json({ Cookies: cookies });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function logout(req, res) {
  try {
    res
      .clearCookie("tokenUsuario")
      .json("Se ha cerrado la sesión exitosamente");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  login,
  logeado,
  logout,
};
