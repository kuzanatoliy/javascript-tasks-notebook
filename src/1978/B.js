module.exports = {
  getMaxMoney: (num, a, b) => {
    if (a > b) {
      return a * num;
    }
    let profit = 0n;
    let diff = b - a;
    const remaining = num - diff;
    if (remaining > 0n) {
      profit += remaining * a;
    } else {
      diff = num;
    }
    profit += (b * (b + 1n)) / 2n - ((b - diff) * (b - diff + 1n)) / 2n;
    return profit;
  },
};
