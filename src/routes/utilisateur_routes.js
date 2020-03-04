
const express = require("express");
require("express-async-errors");

const {ajouterUnUtilisateur} = require("../controllers/utilisateur_controller");

const { OK, CREATED } = require("../helpers/status_code");

const utilisateursRouter = express.Router();


utilisateursRouter.post("/", async (request, response) => {
  const data = request.body;
  //console.log("je recupere ma data:",data)
  const nouveauuser = await ajouterUnUtilisateur(data);
  //console.log("on est dans la route : ", nouveauuser);
  
  // response.status(200);
  // response.json(nouveauuser);
  response.status(200).json(nouveauuser);
//   response.status(CREATED);
//   response.json(nouveauuser);
console.log("on va sortir de la route");
 });

 // promotionsRouter.get("/", async (request, response) => {
//   const promotions = await recupererLesPromotions();

//   response.status(OK);
//   response.json(promotions);
// });

// promotionsRouter.get("/:id", async (request, response) => {
//   const { id } = request.params;
//   const promotion = await recupererUnePromotion(id);

//   response.status(OK);
//   response.json(promotion);
// });


module.exports = utilisateursRouter;
