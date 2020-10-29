const express = require("express");
const path = require("path");

const router = express.Router();

const rootDir = require("../util/path");
const adminData = require("./admin");

// get le agrega el exact a la ruta si no es "/" (en este caso) no entra al router

router.get("/", (req, res, next) => {
  console.log(adminData.products);

  res.sendFile(path.join(rootDir, "/views", "/shop.html"));
});

module.exports = router;
