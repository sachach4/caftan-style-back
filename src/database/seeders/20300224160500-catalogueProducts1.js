const catalogueProducts=require("../seeds/20300224160500-catalogueProducts");
module.exports={
  up:(queryInterface,Sequelize)=>{
    return queryInterface.bulkInsert("products", catalogueProducts);
    
  },
  down:(queryInterface,Sequelize)=>{
    return queryInterface.bulkDelete("products", null, {});
  }
}