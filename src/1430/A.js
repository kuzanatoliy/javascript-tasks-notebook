module.exports = {
  getFlatCounts: (num) => {
    if (num === 1 || num === 2 || num === 4) {
      return [-1];
    }
    const c = Math.floor(num / 3);
    const d = num % 3;
    if (d === 1) {
      return [c - 2, 0, 1];
    }
    if (d === 2) {
      return [c - 1, 1, 0];
    }
    return [c, 0, 0];
  },
};
