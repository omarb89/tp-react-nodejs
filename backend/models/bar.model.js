import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

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

export default Bar;
