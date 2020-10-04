class VendingMachine {
  constructor() {
    this.balance = 0;
    this.till = { 10: 0, 50: 0, 100: 0, 500: 0 };
    this.selectRow = 0;
    this.selectColumn = 0;
    this.inventory = inventoryOne;
  }

  insertCoins(denomination) {
    this.balance += denomination;
    this.till[denomination] += 1;
    return true;
  }

  changeReturn() {
    // log amount to be returned
    console.log("Amount to be returned: ", this.balance);
    let toReturn = this.balance;

    // reset balance
    this.balance = 0;
    return toReturn;
  }

  rowSelector(row) {
    // selects item from given row
    if (this.selectRow === 0) {
      this.selectRow = row;
    }
    console.log(row);
    return row;
  }

  columnSelector(column) {
    // selects item from given column
    if (this.selectColumn === 0) {
      this.selectColumn = column;
    }

    let product = this.inventory[this.selectRow][this.selectColumn];
    // if suffiecient balance, row already selected
    // AND there is a product left in the inventory,

    if (this.selectRow !== 0 && this.selectColumn !== 0) {
      if (this.balance >= product.prize) {
        if (product.count > 0) {
          // dispense product!
          this.dispenseProduct(product.name);

          // adjust balance!
          this.balance -= product.prize;

          // return change!
          this.changeReturn();
        }
        // if row & column selected but inventory = 0, throw error message
        else {
          console.log("No inventory left! Choose another product");
          return "No inventory";
        }
        // if row & column selected but  balance insufficient, throw error message
      } else {
        console.log("Balance too low! Please insert more money.");
        return "Balance insufficient";
      }
    }

    return column;
  }

  updateInventory(productSold) {
    for (let row of this.inventory) {
      for (let item of row) {
        if (item.name === productSold) {
          item.count -= 1;
          return;
        }
      }
    }
    return;
  }

  dispenseProduct(productSold) {
    // 1. row & column logged to console
    console.log(this.selectRow, this.selectColumn);

    // 2. message logged that states 'Here is your [itemName]'
    console.log(`Here is your ${productSold}`);

    // 3. item in inventory decreases by 1
    this.updateInventory(productSold);

    // reset chosen row and column
    this.selectColumn = 0;
    this.selectRow = 0;
  }
}

const orangeJuice = { name: "orangeJuice", price: 150, count: 5 };
const chocoMilk = { name: "chocoMilk", price: 250, count: 5 };
const toblerone = { name: "toblerone", price: 350, count: 5 };
const gummibears = { name: "gummibears", price: 200, count: 5 };

const calpis = { name: "calpis", price: 250, count: 5 };
const kagiFret = { name: "kagiFret", price: 150, count: 5 };
const potatoChips = { name: "potatoChips", price: 100, count: 5 };
const chewingGum = { name: "chewingGum", price: 100, count: 5 };

const iceTeaPeach = { name: "iceTeaPeach", price: 300, count: 5 };
const mAndM = { name: "mAndM", price: 250, count: 5 };
const snickers = { name: "snickers", price: 100, count: 5 };
const applePie = { name: "applePie", price: 250, count: 5 };

const crackers = { name: "crackers", price: 200, count: 5 };
const bounty = { name: "bounty", price: 50, count: 5 };
const fanta = { name: "fanta", price: 250, count: 5 };
const ricola = { name: "ricola", price: 350, count: 5 };

const inventoryOne = [
  [orangeJuice, chocoMilk, toblerone, gummibears],
  [calpis, kagiFret, potatoChips, chewingGum],
  [iceTeaPeach, mAndM, snickers, applePie],
  [crackers, bounty, fanta, ricola],
];

module.exports = VendingMachine;

/*
  >>> Don't forget to use module.exports!
  What is that? Well, glad you asked.
  Read about it here: https://www.sitepoint.com/understanding-module-exports-exports-node-js/
*/
