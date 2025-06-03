module.exports = {
  getCandiesCount: (num, k) => num - Math.max(0, (num % k) - Math.floor(k / 2)),
};
