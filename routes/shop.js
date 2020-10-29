const express = require("express");
const path = require("path");

const router = express.Router();

const rootDir = require("../util/path");

// get le agrega el exact a la ruta si no es "/" (en este caso) no entra al router

router.get("/", (req, res, next) => {
  res.sendFile(path.join(rootDir, "/views", "/shop.html"));
});

module.exports = router;
