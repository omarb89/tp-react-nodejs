// models/Biere.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite'
});

const Biere = sequelize.define('Biere', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Biere;
