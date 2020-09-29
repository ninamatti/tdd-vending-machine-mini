class VendingMachine {
  constructor() {
    this.balance = 0;
    this.till = { 10: 0, 50: 0, 100: 0, 500: 0 };
    this.selectRow = 0;
    this.selectColumn = 0;
  }
  insertCoins(denomination) {
    this.balance += denomination;
    this.till.denomination += 1;
    return true;
  }
  changeReturn() {
    //logs coins
    //resets balance
    return true;
  }
  selector() {
    // selects item from given row/column
    // prints item 
    return true;
  }
}

module.exports = VendingMachine;

/*
  >>> Don't forget to use module.exports!
  What is that? Well, glad you asked.
  Read about it here: https://www.sitepoint.com/understanding-module-exports-exports-node-js/
*/
