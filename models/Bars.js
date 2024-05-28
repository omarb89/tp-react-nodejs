const db = require('../config/database');
const sequelize = require('sequelize');

const barSchema = db.define('bar', {
  id: { type: sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: sequelize.STRING },
  description: { type: sequelize.STRING, allowNull: true },
  start_date: { type: sequelize.DATE, allowNull: true },
  end_date: { type: sequelize.DATE, allowNull: true },
  done: { type: sequelize.BOOLEAN, defaultValue: false },
});

module.exports = barSchema

