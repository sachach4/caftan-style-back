const express = require("express");
require("express-async-errors");

const { recupererLesProducts } = require("../controllers/products_controller");

const { ok } = require("../helpers/status_code")
const productsRouter = express.Router();

productsRouter.get("/", async (request, response) => {
  const products = await recupererLesProducts();
  response.status(200).json(products);

});
productsRouter.get("/:id", async (request, response) => {
  const { id } = request.params;
  const caftan = await recupererLesCaftan(id);
  console.log("on va sortir de la route");
  console.log(caftan);
  response.status(200).json(caftan);
});
module.exports = productsRouter;
