const {Product}  = require("../models");

const productsController = {
     recupererLesProducts: async () => {
   

    const products = await Product.findAll({
      //order: [["nom", "ASC"]],
      
      attributes: ["id", "nom", "prix", "taille", "image", "stock"],
      raw: true
    });
   
    return products;
  }
};
module.exports = productsController;

//select * from products as p where p."categorie_id"= (select c.id from categories as c where c.nom='Caftan');

//SELECT "Categorie".*, "Products"."id" AS "Products.id", "Products"."nom" AS "Products.nom", "Products"."prix" AS "Products.prix", "Products"."taille" AS "Products.taille", "Products"."image" AS "Products.image", "Products"."categorie_id" AS "Products.categorieId", "Products"."stock" AS "Products.stock", "Products"."created_at" AS "Products.createdAt", "Products"."updated_at" AS "Products.updatedAt", "Products"."CategorieId" AS "Products.CategorieId" FROM (SELECT "Categorie"."id", "Categorie"."nom" FROM "categories" AS "Categorie" WHERE "Categorie"."nom" = 'Caftan' LIMIT 1) AS "Categorie" LEFT OUTER JOIN "products" AS "Products" ON "Categorie"."id" = "Products"."CategorieId";

