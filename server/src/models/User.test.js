const { describe, it, expect, beforeAll, afterAll } = require("@jest/globals");
const { User } = require("./User");
const { Deck } = require("./Deck");
// const { User } = require("./User");
// const { User } = require("./User");
const { db } = require("../db/config");
// import { db } from "../db/config";
// define in global scope
let user;
let deck;
let card;
let attack;

// clear db and create new user before tests
beforeAll(async () => {
  await db.sync({ force: true });
  user = await User.create({ username: "gandalf" });
});

// clear db after tests
afterAll(async () => await db.sync({ force: true }));

describe("User", () => {
  it("user has an id", async () => {
    expect(user).toHaveProperty("id");
  });
  it("has the correect name", async () => {
    expect(user.username).toBe("gandalf");
  });
});

// deck = await User.create({ username: "gandalf" });
