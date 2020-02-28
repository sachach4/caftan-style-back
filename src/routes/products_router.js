const express = require("express");
require("express-async-errors");

const { recupererLesProducts } = require("../controllers/products_controller");

const { ok } = require("../helpers/status_code")
const productsRouter = express.Router();

productsRouter.get("/", async (request, response) => {
  const products = await recupererLesProducts();
  //console.log("on est dans la route : ", products);
//  response.status(ok);
//  response.json(products)
  response.status(200).json(products);
 // console.log("on va sortir de la route");
});
module.exports = productsRouter;
