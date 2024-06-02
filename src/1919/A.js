module.exports = {
  getWinner: (a, b) => (Math.abs(a - b) % 2 === 0 ? 'Bob' : 'Alice'),
};
