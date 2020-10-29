const http = require("http");

const path = require("path"); //Con path puedo obtener la ruta donde estoy y de esta forma me sirva para todos los SO
const express = require("express");
const bodyParser = require("body-parser");

//express es una funcion
const app = express();

//Configuracion de los  middleware
//next permite que el flujo del programa pase al siguiente middleware
//send permite el envio de respuesta sin tener que especificar headers ni tipos de datos
//el primer argumento de use es el path
//para analizar la req es necesario un pakete de terceros "body-parser"
app.use(bodyParser.urlencoded({ extended: false }));

const rootDir = require("./util/path");
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "/views", "/404.html"));
});

app.listen(4000);
