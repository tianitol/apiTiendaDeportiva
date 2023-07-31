const express = require('express');
const connectDB = require('./db');
const app = express()
//const Router = require('');

connectDB()





app.listen(3000, () =>{
    console.log("Server listening on port 3000");
})