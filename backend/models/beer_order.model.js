import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import Beer from './beer.model.js';
import Order from './order.model.js';

const BeerOrder = sequelize.define('BeerOrder', {
  beerId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Beer,
      key: 'id'
    }
  },
  orderId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Order,
      key: 'id'
    }
  },
  quantity: {
    type: DataTypes.INTEGER,
    defaultValue: 1,
    allowNull: false
  }
});

// Définir les relations
Beer.belongsToMany(Order, { through: BeerOrder });
Order.belongsToMany(Beer, { through: BeerOrder });

export default BeerOrder;
