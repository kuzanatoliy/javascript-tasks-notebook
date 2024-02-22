module.exports = {
  getBetterElevator: (a, b, c) => {
    const d = Math.abs(b - c);
    if (a < d + c) {
      return 1;
    }
    if (a > d + c) {
      return 2;
    }
    return 3;
  },
};
