module.exports = {
  isItPossibleToRepresent: (num) => {
    if (num < 31) {
      return ['NO'];
    }
    if (num === 36 || num === 40 || num === 44) {
      return ['YES', [6, 10, 15, num - 31]];
    }
    return ['YES', [6, 10, 14, num - 30]];
  },
};
