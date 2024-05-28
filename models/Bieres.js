module.exports = (sequelize, DataTypes) => {
    const Biere = sequelize.define('Biere', {
      name: {
        type: DataTypes.STRING,
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
    return Biere;
  };
  