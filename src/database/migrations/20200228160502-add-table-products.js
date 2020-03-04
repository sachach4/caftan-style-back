module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("products", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      nom: {
        allowNull: false,
        type: Sequelize.STRING(50)
      },
      prix: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      taille: {
        allowNull: false,
        type: Sequelize.STRING(10)
      },
      image: {
        allowNull: false,
        type: Sequelize.STRING(50)
      },
      categorie_id: {
        allowNull: false,
        type: Sequelize.UUID,
        onDelete: "CASCADE",
        references: {
          model: "categories",
          key: "id"
        }
      },
      descriptif:{
        allowNull:false,
        type:Sequelize.STRING(200)

      },
      stock: {
        allowNull: false,
        type: Sequelize.INTEGER
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
    return queryInterface.dropTable("products");
  }
};
