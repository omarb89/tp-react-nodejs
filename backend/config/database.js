import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('tp-react-node', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false,
});

export default sequelize;