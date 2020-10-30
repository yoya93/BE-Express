const express = require("express");
const path = require("path");

const router = express.Router();

const rootDir = require("../util/path");
const adminData = require("./admin");

// get le agrega el exact a la ruta si no es "/" (en este caso) no entra al router

router.get("/", (req, res, next) => {
  const products = adminData.products;

  res.render("shop", { prods: products, pageTitle: "shop", path: "/" });
});

module.exports = router;
