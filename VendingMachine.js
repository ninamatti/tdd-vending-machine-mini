class VendingMachine {
  constructor() {
    this.balance = 0;
    this.till = { 10: 0, 50: 0, 100: 0, 500: 0 };
    this.selectRow = 0;
    this.selectColumn = 0;
  }
  insertCoins(denomination) {
    this.balance += denomination;
    this.till[denomination] += 1;
    return true;
  }
  changeReturn() {
    //logs coins
    //resets balance
    return true;
  }

  selector(row, column) {
    // selects item from given row/column
    if ((this.selectRow = 0)) {
      this.selectRow = row;
      this.selectColumn = column;
    }

    // prints item
    return true;
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
const bounty = { name: "bounty", price: 050, count: 5 };
const fanta = { name: "fanta", price: 250, count: 5 };
const ricola = { name: "ricola", price: 350, count: 5 };

const inventory = [
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
