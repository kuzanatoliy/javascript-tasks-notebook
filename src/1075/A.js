module.exports = {
  getWinner: (num, x, y) =>
    Math.max(x - 1, y - 1) > Math.max(num - x, num - y) ? 'Black' : 'White',
};
