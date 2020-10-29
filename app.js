const http = require("http");

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

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(adminRoutes);
app.use(shopRoutes);

app.listen(4000);
