const { Utilisateur } = require("../models");
const bcrypt=require("bcrypt");
const jwt =require("jsonwebtoken");
const config=require("../config/config");
const uuid=require("uuid")


const utilisateurController = {
  // recupererLesUtilisateurs: async () => {
  //   const utilisateur = await Utilisateur.create({
  //     order: [["nom", "ASC"]],
  //     attributes: [
  //       "id",
  //       "nom",
  //       "prenom",
  //       "adresse",
  //       "adresseliv",
  //       "email",
  //       "sexe",
  //       "mps",
  //     ],
  //     raw: true
  //   });
  //   return utilisateur;
  // },

  ajouterUnUtilisateur: async data => {
        console.log(data);
    
    const nouveauUser = { id: uuid(), ...data };
    const utilisateur = await Utilisateur.create(nouveauUser);
    return utilisateur;
  }
};

module.exports = utilisateurController;

