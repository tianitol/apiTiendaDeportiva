const User = require("../models/User");

const login = async (email) => {
  try {
    let usuario = await User.findOne({ email: email });
    return usuario;
  } catch (error) {
    throw newError(error);
  }
};

module.exports = {
  login,
};
