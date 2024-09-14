module.exports = {
  getWinner: (a, b) =>
    (((a - 1) % 2 === 0 ? 2 : 1) + ((b - 1) % 2 === 0 ? 2 : 1)) % 2 === 0
      ? 'Tonya'
      : 'Burenka',
};
