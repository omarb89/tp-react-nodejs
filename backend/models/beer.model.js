import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Beer = sequelize.define('Beer', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT
  },
  degree: {
    type: DataTypes.FLOAT
  },
  prix: {
    type: DataTypes.FLOAT,
    allowNull: false,
    validate: { min: 0 }
  },
  barId: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

export default Beer;
