const { describe, it, expect, beforeAll, afterAll } = require("@jest/globals");
const { User, Deck, Card, Attack } = require("./index");
// import { User, Deck, Card, Attack } from "./index";
const { db } = require("../db/config");

let user;
let deck;

// Deck.hasMany(Card);
// Card.belongsTo(Deck);

// Attack.belongsToMany(Card, { through: "Attack card" });
// Card.belongsToMany(Attack, { through: "Attack card" });

describe("Associations", () => {
  beforeAll(async () => {});

  it("User has one deck ", async () => {
    await db.sync({ force: true });
    Deck.belongsTo(User);

    User.hasOne(Deck);

    user = await User.create({ username: "gandalf" });
    deck = await Deck.create({ name: "Snake Pit", xp: 10 });

    await user.setDeck(Deck);

    const associatedDeck = await user.getDeck();
    expect(associatedDeck instanceof Deck).toBeTruthy();

    // expect(user).toHaveProperty("id");
  });
});

module.export = {};
