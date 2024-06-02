import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import Beer from './beer.model.js'; // Assurez-vous d'importer le modèle Beer
import Order from './order.model.js'; // Assurez-vous d'importer le modèle Order

const Bar = sequelize.define('Bar', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  adresse: {
    type: DataTypes.STRING
  },
  tel: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING
  },
  description: {
    type: DataTypes.TEXT
  }
});

// Définition des associations
Bar.hasMany(Beer, { as: 'beers' }); // Un bar peut avoir plusieurs bières
Bar.hasMany(Order, { as: 'orders' }); // Un bar peut avoir plusieurs commandes

export default Bar;
