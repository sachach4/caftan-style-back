module.exports = (sequelize, DataTypes) => {
  const Utilisateur = sequelize.define(
    "Utilisateur",
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
        // validate: {
        //   notNull: true,
        //   len: [2, 50],
        //   unique: true
        // }
      },
      prenom: {
        allowNull: false,
        type: DataTypes.STRING,
        // validate: {
        //   notNull: true,
        //   len: [2, 50],
        //   unique: true
        // }
      },
      adresse: {
        allowNull: false,
        type: DataTypes.STRING,
        //validate: {
        //   notNull: true,
        //   len: [2, 100],
        //   unique: true
        // }
      },
      adresseliv: {
        allowNull: false,
        type: DataTypes.STRING,
        // validate: {
        //   notNull: true,
        //   len: [2, 100],
        //   unique: true
        // }
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING,
        // validate: {
        // //   notNull: true,
        // //   len: [2, 100],
        // //   unique: true
        // // }
      },
      sexe: {
        allowNull: false,
        type: DataTypes.STRING,
        // validate: {
        //   notNull: true,
        //   len: [1, 10],
        //   unique: true
        // }
      },
      mps: {
        allowNull: false,
        type: DataTypes.STRING,
        // validate: {
        //   notNull: true,
        //   len: [5, 50]
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
      tableName: "utilisateurs"
    }
  );


  return Utilisateur;
};
