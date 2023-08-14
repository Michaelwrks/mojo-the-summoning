const { describe, it, expect, beforeAll, afterAll } = require("@jest/globals");
const { Attack } = require("./Attack");
const { db } = require("../db/config");

let attack;

beforeAll(async () => {
  await db.sync({ force: true });
  attack = await Attack.create({
    title: "storm breaker",
    mojoCost: 10,
    staminaCost: 10,
  });
});

afterAll(async () => await db.sync({ force: true }));

describe(" card", () => {
  it("has an id", async () => {
    // TODO - test creating a musician
    expect(attack).toHaveProperty("id");
  });
  it("has the correect name", async () => {
    expect(attack.title).toBe("storm breaker");
  });
  it("has a mojo", async () => {
    expect(attack.mojoCost).toBe(10);
  });
  it("has stamina", async () => {
    expect(attack.staminaCost).toBe(10);
  });
});
