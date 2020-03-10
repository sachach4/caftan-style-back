const { Utilisateur } = require("../models");
const { hash, compare } = require("bcryptjs");
const jwt =require("jsonwebtoken");
const config=require("../config/config");
const uuid=require("uuid");
const dotenv = require("dotenv");
dotenv.config();


const utilisateurController = {
  recupererLesUtilisateurs: async () => {
    const utilisateur = await Utilisateur.findAll({
      order: [["nom", "ASC"]],
      attributes: [
        "id",
        "nom",
        "prenom",
        "adresse",
        "adresseliv",
        "email",
        "sexe",
        "mps",
      ],
      raw: true
    });
    return utilisateur;
  },

  ajouterUnUtilisateur: async (data,request, response) => {
    if (data.mps === data.mps_confirm) {
        console.log(data);
    
    const nouveauUser = { id: uuid(), ...data };
    const utilisateur = await Utilisateur.create(nouveauUser);
    return utilisateur;
    }
    else 
   console.log("mp inco");
  }
};

module.exports = utilisateurController;

