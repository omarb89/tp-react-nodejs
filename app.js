const express = require('express');
const cors = require('cors');
const { Sequelize, DataTypes } = require('sequelize');
const config = require('./config.json').development;

// Initialisation de Sequelize
const sequelize = new Sequelize({
  dialect: config.dialect,
  storage: config.storage
});

// Import des modèles
const db = require('./models');

// Synchronisation des modèles
sequelize.sync();

const app = express();
app.use(express.json());

// Utiliser le middleware CORS
app.use(cors());

// Import des routeurs
//const barRouter = require('./router/barRouter');
//const beerRouter = require('./router/beerRouter');
//const commandRouter = require('./router/commandRouter');
//const beerCommandRouter = require('./router/beerCommandRouter');

// Utilisation des routeurs
//app.use(barRouter);
//app.use(beerRouter);
//app.use(commandRouter);
//app.use(beerCommandRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
