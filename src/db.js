const mongoose = require('mongoose');
const {DB_URI} = require('./config')

const uri = DB_URI;


const connetDB = () => {
    mongoose.connect(uri)
    .then(() => console.log("Connecting to mongodb"))
    .catch(err => console.log("Error connecting to mongodb" + err ))
}

module.exports = connetDB