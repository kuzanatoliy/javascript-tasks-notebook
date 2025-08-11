module.exports = {
  getTotalCosts: (costs, coupons) => {
    costs.sort((a, b) => b - a);
    const sum = costs.reduce((a, b) => a + b, 0);
    const sums = [];
    for (let j = 0; j < coupons.length; j++) {
      sums.push(sum - costs[coupons[j] - 1]);
    }
    return sums;
  },
};
