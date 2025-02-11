module.exports = {
  getCountOfTurns: (power, turns, a, b) => {
    const min = b * turns;
    if (min < power) {
      return Math.min(turns, Math.floor((power - min - 1) / (a - b)));
    }
    return -1;
  },
};
