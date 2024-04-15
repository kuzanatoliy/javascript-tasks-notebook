module.exports = {
  getCellNumber: (n, m, x) => {
    x--;
    return m * (x % n) + Math.floor(x / n) + 1;
  },
};
