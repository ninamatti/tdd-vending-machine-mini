const VendingMachine = require("../VendingMachine");
const { expect } = require("chai");

describe.only("Insert Coins", () => {
  const machine = new VendingMachine();
  it("should be a method of vending machine", () => {
    expect(typeof machine.insertCoins).to.equal("function"); // Use an ES6 getter
  });
  it("should increase balance by the coin value", () => {
    machine.insertCoins(10);
    expect(machine.balance).to.equal(10);
  });
  it("should store coin in till based on denomination", () => {
    machine.insertCoins(10);
    expect(machine.till[10]).to.equal(2); // Use an ES6 getter
  });
});

describe("Change Return", () => {
  it("should be a method of vending machine", () => {
    const machine = new VendingMachine();
    expect(typeof machine.changeReturn).to.equal("function"); // Use an ES6 getter
  });
});

describe("Selector", () => {
  it("should be a method of vending machine", () => {
    const machine = new VendingMachine();
    expect(typeof machine.selector).to.equal("function"); // Use an ES6 getter
  });
});

describe("Vending machine", () => {
  it("should have the necessary properties", () => {
    const machine = new VendingMachine();
    expect(machine).to.have.property("balance"); // Use an ES6 getter
    expect(machine).to.have.property("till"); // Use an ES6 getter
    expect(machine).to.have.property("selectRow"); // Use an ES6 getter
    expect(machine).to.have.property("selectColumn"); // Use an ES6 getter
  });
});

describe("vending machine", () => {
  it("should accept valid coins", () => {
    // Setup
    const machine = new VendingMachine();
    console.log(machine);
    // Exercise
    machine.insertCoin(500);
    // Assert
    expect(machine.till).to.deep.equal({
      10: 0,
      50: 0,
      100: 0,
      500: 1,
    });
    expect(machine.balance).to.equal(500); // Use an ES6 getter
  });
});
