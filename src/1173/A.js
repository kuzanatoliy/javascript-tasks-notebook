module.exports = {
  getVotingResult: (x, y, z) => {
    if (x > y + z) {
      return '+';
    }
    if (y > x + z) {
      return '-';
    }
    if (x === y && z === 0) {
      return '0';
    }
    return '?';
  },
};
