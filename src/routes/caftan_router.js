const express = require("express");
require("express-async-errors");

const { recupererLesCaftan } = require("../controllers/categorie_controller");

const { ok } = require("../helpers/status_code")
const caftanRouter = express.Router();

// caftanRouter.get("/", async (request, response) => {
//   const caftan = await recupererLesCaftan();
//   console.log("on est dans la route : ", caftan);
// //  response.status(ok);
// //  response.json(products)
//   response.status(200).json(caftan);
//  // console.log("on va sortir de la route");
// });

caftanRouter.get("/:nom", async (request, response) => {
  const { nom } = request.params;
  const caftan = await recupererLesCaftan(nom);
  console.log("on va sortir de la route");

  response.status(200).json(caftan);
});


// caftanRouter.get("/", async (request, response) => {
//   const caftan = await recupererLesCaftan();
//   console.log("on est dans la route : ", caftan);
// //  response.status(ok);
// //  response.json(products)
//   response.status(200).json(caftan);
//  // console.log("on va sortir de la route");
// });

module.exports = caftanRouter;
