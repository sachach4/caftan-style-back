module.exports={
  up:(queryInterface,Sequelize)=>{
    return queryInterface.createTable("utilisateurs", {
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
      prenom:{
        allowNull:false,
        type:Sequelize.STRING(50)
      },
      adresse:{
        allowNull:false,
        type:Sequelize.STRING(100)
      },
      adresseliv:{
        allowNull:false,
        type:Sequelize.STRING(100)
      },
      email:{
        allowNull:false,
        type:Sequelize.STRING(100)
      },
      sexe:{
        allowNull:false,
        type:Sequelize.STRING(10)
      },
      mps:{
        allowNull:false,
        type:Sequelize.STRING(20)

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
      return queryInterface.dropTable("utilisateurs");
    }
  };