const { db, DataTypes, Model } = require("../db/config.js");

class Attack extends Model {}

Attack.init(
  {
    title: DataTypes.INTEGER,
    mojoCost: DataTypes.INTEGER,
    staminaCost: DataTypes.INTEGER,
  },
  {
    sequelize: db,
    modelName: "Attack",
  }
);
db.sync();

module.exports = { Attack };
