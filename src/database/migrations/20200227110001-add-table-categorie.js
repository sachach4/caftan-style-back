module.exports={
  up:(queryInterface,Sequelize)=>{
    return queryInterface.createTable("categories", {
      id:{
        allowNull:false,
        primaryKey:true,
        type:Sequelize.UUID,
        defaultValue:Sequelize.UUIDV4
      },
      nom:{
        allowNull:false,
        type:Sequelize.STRING(50)
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      }    
    });


  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("categories");
  }
  
}