const { db, DataTypes, Model } = require("../db/config.js");

class User extends Model {}

User.init(
  {
    username: DataTypes.STRING,
  },
  {
    sequelize: db,
    modelName: "User",
  }
);
db.sync();

module.exports = { User };
