const db = require('../backend/config/database');
const sequelize = require('sequelize');

const commandeSchema = db.define('commandes', {
  biere_id: { type: sequelize.INTEGER,  },
  commande_id: { type: sequelize.INTEGER },
});

module.exports = commandeSchema
