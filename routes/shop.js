const express = require("express");
const path = require("path");

const router = express.Router();
const productsController = require("../controllers/products");

const rootDir = require("../util/path");
const adminData = require("./admin");

// get le agrega el exact a la ruta si no es "/" (en este caso) no entra al router

router.get("/", productsController.getProducts);

module.exports = router;
