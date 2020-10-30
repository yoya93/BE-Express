const http = require("http");

const path = require("path"); //Con path puedo obtener la ruta donde estoy y de esta forma me sirva para todos los SO
const express = require("express");
const bodyParser = require("body-parser");

//express es una funcion
const app = express();

// Config motores de plantillas html(Pug)
//app.set("view engine", "pug"); //Indicamos que queremos compilar express con plantillas dinamicas con el motor pug
//app.set("views", "views"); //Donde estan estas plantillas dinamicas

// Config motores de plantillas html(handlebars)
//hbs trabaja con {{}} solo recib valores simples (no array , no obj)
//mas sencillo que pug en cuanto al html
// const expressHbs = require("express-handlebars");
// app.engine(
//   "hbs",
//   expressHbs({
//     layoutsDir: "views/layouts/",
//     defaultLayout: "main-layout",
//     extname: "hbs",
//   })
// );
// app.set("view engine", "hbs");
// app.set("views", "views"); //Donde estan estas plantillas dinamicas

// Config motores de plantillas html(EJS)
app.set("view engine", "ejs"); //Indicamos que queremos compilar express con plantillas dinamicas con el motor ejs
app.set("views", "views"); //Donde estan estas plantillas dinamicas

//Configuracion de los  middleware
//next permite que el flujo del programa pase al siguiente middleware
//send permite el envio de respuesta sin tener que especificar headers ni tipos de datos
//el primer argumento de use es el path
//para analizar la req es necesario un pakete de terceros "body-parser"
app.use(bodyParser.urlencoded({ extended: true }));
// con el static manejamos files sin que tengan que pasar por el enrutador de express
//podemos comunicarnos con la folder public
//cual solicitud de files (.css .png .*) que se realice express lo va a ir a buscar a la carpeta public
app.use(express.static(path.join(__dirname, "/public")));

const rootDir = require("./util/path");
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res
    .status(404)
    .render("404", { pageTitle: "Page not Found", path: "/views" });
});

app.listen(4000);
