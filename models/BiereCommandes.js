module.exports = (sequelize, DataTypes) => {
    const BiereCommande = sequelize.define('BiereCommande', {
      biereId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Bieres',
          key: 'id'
        }
      },
      commandeId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Commandes',
          key: 'id'
        }
      }
    });
    return BiereCommande;
  };
  