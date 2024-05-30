const db = require('../config/database.js');
const sequelize = require('sequelize');

const barSchema = db.define('bar', {
  id: { type: sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: sequelize.STRING },
  description: { type: sequelize.STRING, allowNull: true },
  adresse: { type: sequelize.STRING },
  email: { type: sequelize.STRING },
  telephone: { type: sequelize.STRING, allowNull: true },
});

module.exports = barSchema

