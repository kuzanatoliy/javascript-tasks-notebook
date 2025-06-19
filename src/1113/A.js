module.exports = {
  getMinAmount: (num, v) => {
    let sum = Math.min(num - 1, v);
    const c = num - v;
    for (let j = 2; j <= c; j++) {
      sum += j;
    }
    return sum;
  },
};
