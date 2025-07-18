module.exports = {
  getWinner: (a, b, c, d) =>
    Math.min(a, c) < Math.min(b, d) ? 'Flower' : 'Gellyfish',
};
