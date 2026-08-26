module.exports = {
  getMaxSum: (a, b) => {
    const candidate1 = a * b + 1n;
    let ans = -1n;

    if (candidate1 % 2n === 0n) {
      ans = candidate1;
    } else if (b % 2n === 0n) {
      const candidate2 = a * (b / 2n) + 2n;
      if (candidate2 % 2n === 0n) {
        ans = candidate2;
      }
    }

    return ans;
  },
};
