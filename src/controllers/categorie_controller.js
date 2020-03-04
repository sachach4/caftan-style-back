const { Categorie, Product } = require("../models");
//const db = require("../models");
//const { Categorie, Product } = db;

const caftanController = {
  recupererLesCaftan: async nomCat => {
    const categorie = await Categorie.findAll({
      attributes: ["id", "nom"],
      include: [
        {
          model: Product,
          attributes: ["id", "nom", "prix", "taille", "image", "stock"]
        }
      ],
      where: { nom: nomCat },
      raw: true
    });
    return categorie;
  },
  recupererUnProduit: async id => {
    const Produit = await Product.findByPk(id, {
      attributes: ["id", "nom", "prix", "taille", "image", "stock"],
      include: [
        {
          model: Categorie,
          attributes: ["id", "nom"]
        }
      ]
    });
    return Produit;
  }
};
module.exports = caftanController;

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
