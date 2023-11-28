const BILL_TYPES = [100, 20, 10, 5, 1];

module.exports = {
  checkCountOfBills: (money) => {
    let count = 0;
    for (let i = 0; i < BILL_TYPES.length; i++) {
      count += Math.floor(money / BILL_TYPES[i]);
      money %= BILL_TYPES[i];
    }
    return count;
  },
};
