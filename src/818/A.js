module.exports = {
  getWinners: (num, k) => {
    const d = Math.floor(num / 2 / (k + 1));
    return [d, k * d, num - d * (k + 1)];
  },
};
