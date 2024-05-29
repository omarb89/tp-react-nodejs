const { Sequelize } = require('sequelize');
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite'
});

const Bar = require('./bars')(sequelize, Sequelize.DataTypes);
const Biere = require('./Bieres')(sequelize, Sequelize.DataTypes);
const Commande = require('./Commandes')(sequelize, Sequelize.DataTypes);
const BiereCommande = require('./BiereCommandes')(sequelize, Sequelize.DataTypes);

// Définir les relations
Bar.hasMany(Biere, { foreignKey: 'barId', onDelete: 'CASCADE' });
Biere.belongsTo(Bar, { foreignKey: 'barId' });

Bar.hasMany(Commande, { foreignKey: 'barId', onDelete: 'CASCADE' });
Commande.belongsTo(Bar, { foreignKey: 'barId' });

Biere.belongsToMany(Commande, { through: BiereCommande, foreignKey: 'biereId' });
Commande.belongsToMany(Biere, { through: BiereCommande, foreignKey: 'commandeId' });

sequelize.sync({ alter: true }).then(() => {
  console.log("Database & tables created!");
}).catch(error => {
  console.error("Error creating database: ", error);
});

module.exports = {
  sequelize,
  Bar,
  Biere,
  Commande,
  BiereCommande
};
