module.exports = {
  getCountOfTents: (a, b, c) => {
    const d = b % 3;
    if (d !== 0 && c < 3 - d) {
      return -1;
    }
    return a + Math.ceil((b + c) / 3);
  },
};
