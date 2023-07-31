const express = require('express');
const connectDB = require('./db');
const app = express()
const shoesRouter = require('./router/shoesRouter');
const {PORT} = require('./config')

connectDB()

//acá las rutas
app.use('/api', shoesRouter)

app.listen(PORT, () =>{
    console.log("Server listening on port 3000");
})