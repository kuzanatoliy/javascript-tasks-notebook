module.exports = {
  getWinner: (arr) =>
    arr.reduce((a, b) => a + b - 1, 0) % 2 === 0 ? 'maomao90' : 'errorgorn',
};
