import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Order = sequelize.define('Order', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  prix: {
    type: DataTypes.FLOAT,
    allowNull: false,
    validate: { min: 0 }
  },
  date: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'en cours'
  },
  barId: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

export default Order;
