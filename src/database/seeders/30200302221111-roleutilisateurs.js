const roleutilsateur=require("../seeds/30200302221400-roleutilisateurs");
module.exports={
  up:(queryInterface,Sequelize)=>{
    return queryInterface.bulkInsert("role_utilisateurs", roleutilsateur);
    
  },
  down:(queryInterface,Sequelize)=>{
    return queryInterface.bulkDelete("role_utilisateurs", null, {});
  }
}