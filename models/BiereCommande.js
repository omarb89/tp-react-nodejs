// models/BiereCommande.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite'
});

const BiereCommande = sequelize.define('BiereCommande', {
  biereId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Biere',
      key: 'id'
    }
  },
  commandeId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Commande',
      key: 'id'
    }
  }
});

module.exports = BiereCommande;
