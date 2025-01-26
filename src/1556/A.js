module.exports = {
  getCountOfOperations: (c, d) => {
    if (c === d) {
      return c === 0 ? 0 : 1;
    }
    return Math.abs(c - d) % 2 === 1 ? -1 : 2;
  },
};
