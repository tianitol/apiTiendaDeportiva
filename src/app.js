const express = require("express");
const connectDB = require("./db");
const cors = require("cors");
const app = express();
const cookieParser = require("cookie-parser");
const shoeRouter = require("./router/shoeRouter");
const clothesRouter = require("./router/clothesRouter");
const accessoryRouter = require("./router/accessoryRouter");
const userRouter = require("./router/userRouter");
const { PORT } = require("./config");

app.use(cors({ credentials: true, origin: "http://localhost:5173" }));
connectDB();

app.use(cookieParser());

//middleware para analizar el cuerpo de las solicitudes entrates con formato json convirtiendolo en javascript
app.use(express.json());

//acá las rutas
app.use("/api", shoeRouter);
app.use("/api", clothesRouter);
app.use("/api", accessoryRouter);
app.use("/api", userRouter);

app.listen(PORT, () => {
  console.log("Server listening on port 3000");
});
