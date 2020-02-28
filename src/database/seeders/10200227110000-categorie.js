const categorie=require("../seeds/10200227110000-categorie");
module.exports={
  up:(queryInterface,Sequelize)=>{
    return queryInterface.bulkInsert("categories", categorie);
    
  },
  down:(queryInterface,Sequelize)=>{
    return queryInterface.bulkDelete("categories", null, {});
  }
}