
const express = require("express");
require("express-async-errors");

const {ajouterUnUtilisateur,recupererLesUtilisateurs} = require("../controllers/utilisateur_controller");

const { OK, CREATED } = require("../helpers/status_code");

const utilisateursRouter = express.Router();

utilisateursRouter.get("/", async (request, response) => {
  const affichUtilisateurs = await recupererLesUtilisateurs();
  response.status(200).json(affichUtilisateurs);
  console.log("on va sortir de la route");

});
utilisateursRouter.post("/", async (request, response) => {
  const data = request.body;
  const nouveauuser = await ajouterUnUtilisateur(data);
  response.status(200).json(nouveauuser);
console.log("on va sortir de la route");
 });

 


// promotionsRouter.get("/:id", async (request, response) => {
//   const { id } = request.params;
//   const promotion = await recupererUnePromotion(id);

//   response.status(OK);
//   response.json(promotion);
// });


module.exports = utilisateursRouter;
