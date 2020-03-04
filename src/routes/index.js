const express=require("express");

const productsRouter=require("./products_router");
const caftanRouter=require("./caftan_router")
const utilisateurRouter=require("./utilisateur_routes")
const mainRouter=express.Router();

mainRouter.use("/produits", productsRouter);
mainRouter.use("/categories", caftanRouter);
mainRouter.use("/user",utilisateurRouter);



module.exports=mainRouter;