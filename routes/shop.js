const express = require("express");

const router = express.Router();

// get le agrega el exact a la ruta si no es "/" (en este caso) no entra al router

router.get("/", (req, res, next) => {
  res.send("<h2>Hola express</h2>");
});

module.exports = router;
