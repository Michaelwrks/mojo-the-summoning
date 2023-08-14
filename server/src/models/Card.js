const { db, DataTypes, Model } = require("../db/config.js");

class Card extends Model {}

Card.init(
  {
    name: DataTypes.STRING,
    mojo: DataTypes.INTEGER,
    stamina: DataTypes.INTEGER,
    imgUrl: DataTypes.INTEGER,
  },
  {
    sequelize: db,
    modelName: "Card",
  }
);
db.sync();

module.exports = { Card };
