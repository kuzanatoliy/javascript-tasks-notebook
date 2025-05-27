module.exports = {
  getWinner: (a, b, c, d) => {
    const d1 = Math.max((3 * a) / 10, a - (a / 250) * c);
    const d2 = Math.max((3 * b) / 10, b - (b / 250) * d);

    if (d1 > d2) {
      return 'Misha';
    } else if (d1 < d2) {
      return 'Vasya';
    } else {
      return 'Tie';
    }
  },
};
