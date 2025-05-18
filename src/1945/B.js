module.exports = {
  getMaxCount: (a, b, m) => {
    m++;
    return m / a + (m % a === 0n ? 0n : 1n) + m / b + (m % b === 0n ? 0n : 1n);
  },
};
