const sequelize = require("sequelize");

const db = new sequelize({
    dialect: "sqlite",
    storage: "bar_tp.sqlite"
});

db.sync();

module.exports = db;