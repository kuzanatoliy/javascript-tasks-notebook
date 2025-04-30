module.exports = {
  getMaxInterval: (num) => {
    let x = 2n;
    while (num % x === 0n) {
      x++;
    }
    return --x;
  },
};
