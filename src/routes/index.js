const express=require("express");

const productsRouter=require("./products_router");
const caftanRouter=require("./caftan_router")
const mainRouter=express.Router();

mainRouter.use("/produits", productsRouter);
mainRouter.use("/categories", caftanRouter);


module.exports=mainRouter;