const categorie=require("../seeds/10300224160500-categorie");
module.exports={
  up:(queryInterface,Sequelize)=>{
    return queryInterface.bulkInsert("categories", categorie);
    
  },
  down:(queryInterface,Sequelize)=>{
    return queryInterface.bulkDelete("categories", null, {});
  }
}