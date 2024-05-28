// models/Commande.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite'
});

const Commande = sequelize.define('Commande', {
  date: {
    type: DataTypes.DATE,
    allowNull: false
  }
});

module.exports = Commande;
