import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const BeerOrder = sequelize.define('BeerOrder', {
  beerId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  orderId: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

export default BeerOrder;
