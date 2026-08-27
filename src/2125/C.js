function multiples(l, r, div) {
  return r / div - (l - 1n) / div;
}

module.exports = {
  getMaxSum: (a, b) => {
    const toSub = [2n, 3n, 5n, 7n, 30n, 42n, 70n, 105n];
    const toAdd = [6n, 10n, 14n, 15n, 21n, 35n, 210n];
    let count = b - a + 1n;
    toSub.forEach((sub) => {
      count -= multiples(a, b, sub);
    });
    toAdd.forEach((sub) => {
      count += multiples(a, b, sub);
    });
    return count;
  },
};
