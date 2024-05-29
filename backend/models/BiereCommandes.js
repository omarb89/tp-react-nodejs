const db = require('../backend/config/database');
const sequelize = require('sequelize');

const biereCSchema = db.define('biereCommande', {
  name: { type: sequelize.STRING },
  status: { type: sequelize.STRING, },
  Date: { type: sequelize.DATE},
  prix: { type: sequelize.FLOAT, min:(0) },
  bar_id: { type: sequelize.INTEGER,  },
});

module.exports = biereCSchema