module.exports = {
  getMod: (num, m) => {
    if (num < 27) {
      return m % 2 ** num;
    }
    return m;
  },
};
