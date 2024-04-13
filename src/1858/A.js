module.exports = {
  getWinner: (a, b, c) => (a + (c % 2) > b ? 'First' : 'Second'),
};
