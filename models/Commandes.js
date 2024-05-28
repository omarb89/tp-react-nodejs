module.exports = (sequelize, DataTypes) => {
    const Commande = sequelize.define('Commande', {
      date: {
        type: DataTypes.DATE,
        allowNull: false
      },
      barId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Bars',
          key: 'id'
        }
      }
    });
    return Commande;
  };
  