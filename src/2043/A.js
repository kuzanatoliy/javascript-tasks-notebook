module.exports = {
  getCountOfCoins: (num) => {
    let count = 1n;
    while (num > 3n) {
      num /= 4n;
      count *= 2n;
    }
    return count;
  },
};
