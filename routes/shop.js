const express = require("express");
const path = require("path");

const router = express.Router();

// get le agrega el exact a la ruta si no es "/" (en este caso) no entra al router

router.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "/views", "/shop.html"));
});

module.exports = router;
