const db = require('../config/database');
const sequelize = require('sequelize');

const bCSchema = db.define('biereCommande', {
  name: { type: sequelize.STRING },
  status: { type: sequelize.STRING, },
  Date: { type: sequelize.DATE},
  prix: { type: sequelize.FLOAT, min:(0) },
  bar_id: { type: sequelize.INTEGER,  },
});

module.exports = bCSchema