const express = require("express");
require("express-async-errors");

const { recupererLesProducts } = require("../controllers/products_controller");

const { ok } = require("../helpers/status_code")
const productsRouter = express.Router();

productsRouter.get("/", async (request, response) => {
  const products = await recupererLesProducts();
  response.status(200).json(products);

});
module.exports = productsRouter;
