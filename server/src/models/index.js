const { User } = require("./User");
const { Deck } = require("./Deck");
const { Card } = require("./Card");
const { Attack } = require("./Attack");

// import the rest of your models above

//set up the associations here

User.hasOne(Deck);
Deck.belongsTo(User);

Deck.hasMany(Card);
Card.belongsTo(Deck);

Attack.belongsToMany(Card, { through: "Attack card" });
Card.belongsToMany(Attack, { through: "Attack card" });

// and then export them all below
// db.sync();
module.exports = { User };
module.exports = { Deck };
module.exports = { Attack };
module.exports = { Card };
