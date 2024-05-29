const db = require('../backend/config/database');
const sequelize = require('sequelize');

const biereSchema = db.define('biere', {
  id: { type: sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: sequelize.STRING },
  description: { type: sequelize.STRING, allowNull: true },
  degree: { type: sequelize.FLOAT},
  prix: { type: sequelize.FLOAT, min:(0) },
  bar_id: { type: sequelize.INTEGER,  },
});

module.exports = biereSchema