const role=require("../seeds/20200302221400-role");
module.exports={
  up:(queryInterface,Sequelize)=>{
    return queryInterface.bulkInsert("roles", role);
    
  },
  down:(queryInterface,Sequelize)=>{
    return queryInterface.bulkDelete("roles", null, {});
  }
}