module.exports = {
  getMinCost: (costs, discounts) => {
    costs.sort((a, b) => b - a);
    discounts.sort((a, b) => a - b);
    let sum = costs.reduce((a, b) => a + b, 0);
    for (
      let j = 0, jj = discounts[0] - 1;
      jj < costs.length && j < discounts.length;
      j++, jj += discounts[j]
    ) {
      sum -= costs[jj];
    }
    return sum;
  },
};
