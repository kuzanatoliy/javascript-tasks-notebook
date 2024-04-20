module.exports = {
  getDigits: (a, b, c) => {
    if (a < b && b < c) {
      return 'STAIR';
    }

    if (a < b && c < b) {
      return 'PEAK';
    }

    return 'NONE';
  },
};
