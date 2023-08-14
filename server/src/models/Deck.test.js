const { describe, it, expect, beforeAll, afterAll } = require("@jest/globals");
const { Deck } = require("./Deck");
const { db } = require("../db/config");

let deck;

beforeAll(async () => {
  await db.sync({ force: true });
  deck = await Deck.create({ name: "snake pit", xp: 100 });
  //   deck = await Deck.create({ xp: 100 });
});

afterAll(async () => await db.sync({ force: true }));

describe(" Deck", () => {
  it("has an id", async () => {
    // TODO - test creating a musician
    expect(deck).toHaveProperty("id");
  });
  it("has the correect name", async () => {
    expect(deck.name).toBe("snake pit");
  });
  it("has the correect xp", async () => {
    expect(deck.xp).toBe(100);
  });
  it;
});
