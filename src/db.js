const mongoose = require('mongoose');

const uri = "mongodb+srv://adonosoaster:o44gQL0oaUoLRT6E@cluster0.d223m2y.mongodb.net/?retryWrites=true&w=majority";
// acá deben agregar su usuario y password : const uri = "mongodb+srv://<user>:<password>@cluster0.d223m2y.mongodb.net/?retryWrites=true&w=majority";

const connetDB = () => {
    mongoose.connect(uri)
    .then(() => console.log("Connecting to mongodb"))
    .catch(err => console.log("Error connecting to mongodb" + err ))
}

module.exports = connetDB