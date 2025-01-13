module.exports = {
  getMaxRest: (num, m) => {
    const count = Math.floor(num / 2);
    const d = 1 + num;
    let sum = count * d;
    if (d % 2 === 0) {
      sum += d / 2;
    }
    m %= sum;
    for (let j = 1; j <= m; j++) {
      m -= j;
    }
    return m;
  },
};
