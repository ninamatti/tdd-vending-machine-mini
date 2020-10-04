const VendingMachine = require("../VendingMachine");
const { expect } = require("chai");

describe("Insert Coins", () => {
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

describe("rowSelector", () => {
  it("should be a method of vending machine", () => {
    const machine = new VendingMachine();
    expect(typeof machine.rowSelector).to.equal("function"); // Use an ES6 getter
  });

  it("should store the given row", () => {
    const machine = new VendingMachine();
    machine.rowSelector(2);
    expect(machine.selectRow).to.equal(2);
  });

  it("should print and return selected row to console", () => {
    const machine = new VendingMachine();
    let rowCheck = machine.rowSelector(2);
    expect(rowCheck).to.equal(2);
  });
});

describe("columnSelector", () => {
  it("should be a method of vending machine", () => {
    const machine = new VendingMachine();
    expect(typeof machine.columnSelector).to.equal("function"); // Use an ES6 getter
  });

  it("should store the given column", () => {
    const machine = new VendingMachine();
    machine.columnSelector(2);
    expect(machine.selectColumn).to.equal(2);
  });

  it("should print and return selected column to console", () => {
    const machine = new VendingMachine();
    let columnCheck = machine.columnSelector(3);
    expect(columnCheck).to.equal(3);
  });
});

describe("dispenseProduct method", () => {
  it("should be a method of vending machine", () => {
    const machine = new VendingMachine();
    expect(typeof machine.dispenseProduct).to.equal("function"); // Use an ES6 getter
  });

  it("should reset row and column to 0", () => {
    const machine = new VendingMachine();
    machine.rowSelector(3);
    machine.columnSelector(4);
    console.log("row", machine.selectRow, "column", machine.selectColumn);
    machine.dispenseProduct("orangeJuice");
    console.log("row", machine.selectRow, "column", machine.selectColumn);
    expect(machine.selectRow).to.equal(0);
    expect(machine.selectColumn).to.equal(0);
  });
});

describe("updateInventory method", () => {
  it("should be a method of vending machine", () => {
    const machine = new VendingMachine();
    expect(typeof machine.updateInventory).to.equal("function"); // Use an ES6 getter
  });

  it("should reduce inventory by 1", () => {
    const machine = new VendingMachine();
    machine.updateInventory("orangeJuice");
    expect(machine.inventory[0][0].count).to.equal(4); // Use an ES6 getter
  });
});

describe("Change Return", () => {
  it("should be a method of vending machine", () => {
    const machine = new VendingMachine();
    expect(typeof machine.changeReturn).to.equal("function"); // Use an ES6 getter
  });

  it("should return the correct amount of change", () => {
    const machine = new VendingMachine();
    machine.insertCoins(150);
    let returnedAmount = machine.changeReturn();
    expect(returnedAmount).to.equal(150); // Use an ES6 getter
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

  it("should have a balance of 0 in the beginning", () => {
    // Setup
    const machine = new VendingMachine();
    // Assert
    expect(machine.balance).to.equal(0); // Use an ES6 getter
  });
});
