const db = require('../config/database');
const sequelize = require('sequelize');

const barSchema = db.define('bar', {
  biere_id: { type: sequelize.INTEGER,  },
  commande_id: { type: sequelize.INTEGER },
});

module.exports = barSchema
