const { Sequelize, DataTypes, Model } = require("sequelize");
const path = require("path");

// class DataTypes
// WRITE YOUR CODE HERE

const db = new Sequelize({
  dialect: "sqlite",
  storage: path.join(__dirname, "db.sqlite"),
});

module.exports = {
  db,
  DataTypes,
  Model,
};
