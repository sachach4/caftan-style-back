//const {Categorie,Produits}  = require("../models");
const db = require("../models");

const { Categorie, Product } = db;

const caftanController = {
  recupererLesCaftan: async nomCat => {
    console.log(nomCat);

    console.log("JE PASSE ICI");
    //console.log('rrere', Categorie)


    const categorie = await Categorie.findAll({
      //   //order: [["nom", "ASC"]],
      include: [{
         model: Product ,
         attributes: ["id", "nom", "prix", "taille", "image", "stock"],
        }
      ],
        where: { nom: nomCat },
        attributes: ["nom"],
        
        
        raw: true
      });
      return categorie;
  
      // const categorie = await Categorie.findOne({
      //   //order: [["nom", "ASC"]],
      //   where: { "nom": nomCat },
      //   attributes: ["id", "nom"],
      //   include: [
      //     {

      //      model: Product ,
      //     // attributes: ["id", "nom","prix"]

      //     }
      //   ],
        
      //   raw: true
      // });
      // return categorie;
    
    //console.log("JE PASSE LA AUSSI");
    //console.log("mmmmmmmmmmmmmmmm", categorie);
    
  }
};

//const Produit=db.produit;
//const uuid = require("uuid/v4");

// const caftanController = {
//   recupererLesCaftan: async () => {
//     console.log("JE PASSE ICI");
//     //console.log('rrere', Categorie)

//     const categorie = await Categorie.findAll({
//       //order: [["nom", "ASC"]],

//       attributes: ["id", "nom"],
//       raw: true
//     });
module.exports = caftanController;
