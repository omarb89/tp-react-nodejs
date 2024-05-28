// models/Bar.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite'
});

const Bar = sequelize.define('Bar', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Bar;
