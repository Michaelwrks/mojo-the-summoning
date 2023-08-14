const { describe, it, expect, beforeAll, afterAll } = require("@jest/globals");
const { Card } = require("./Card");
const { db } = require("../db/config");

let card;

beforeAll(async () => {
  await db.sync({ force: true });
  card = await Card.create({
    name: "best card",
    mojo: 100,
    stamina: 10,
    imgUrl: "http://localhost:5000/img/arcturus-spellweaver.jpg",
  });
});

afterAll(async () => await db.sync({ force: true }));

describe(" card", () => {
  it("has an id", async () => {
    // TODO - test creating a musician
    expect(card).toHaveProperty("id");
  });
  it("has the correect name", async () => {
    expect(card.name).toBe("best card");
  });
  it("has a mojo", async () => {
    expect(card.mojo).toBe(100);
  });
  it("has stamina", async () => {
    expect(card.stamina).toBe(10);
  });
  it("has an imageUrl", async () => {
    expect(card.imgUrl).toBe(
      "http://localhost:5000/img/arcturus-spellweaver.jpg"
    );
  });
});
