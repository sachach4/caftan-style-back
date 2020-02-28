module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    "Product",
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        validate: {
          isUUID: 4,
          notNull: true
        }
      },
      nom: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notNull: true,
          len: [2, 50],
          unique: true
        }
      },
      prix: {
        allowNull: false,
        type: DataTypes.INTEGER,
        validate: {
          notNull: true
        }
      },
      taille: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notNull: true,
          len: [1, 10]
        }
      },
      image: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notNull: true,
          len: [5, 50]
        }
      },
      categorieId: {
        field: "categorie_id",
        allowNull: false,
        type: DataTypes.UUID
      },
      stock: {
        allowNull: false,
        type: DataTypes.INTEGER
        // validate: {
        //   notNull: true
        // }
      },
      createdAt: {
        field: "created_at",
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        validate: {
          isDate: true,
          notNull: true
        }
      },
      updatedAt: {
        field: "updated_at",
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        validate: {
          isDate: true,
          notNull: true
        }
      }
    },

    {
      tableName: "products"
    }
  );
  Product.associate = models => {
    Product.belongsTo(models.Categorie, {
      //onDelete: "CASCADE",
      foreignKey: {
        name: "categorieId",
        targetKey:'id',
        onDelete: "CASCADE",
        //allowNull: false
      }
    });
  };

  return Product;
};
