const utilsateur=require("../seeds/20200302221400-utilisateurs");
module.exports={
  up:(queryInterface,Sequelize)=>{
    return queryInterface.bulkInsert("utilisateurs", utilsateur);
    
  },
  down:(queryInterface,Sequelize)=>{
    return queryInterface.bulkDelete("utilisateurs", null, {});
  }
}