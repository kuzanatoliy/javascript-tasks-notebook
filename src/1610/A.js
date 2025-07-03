module.exports = {
  getCountOfLength: (num, m) => {
    if (num === 1 && m === 1) {
      return 0;
    }
    if (num === 1 || m === 1) {
      return 1;
    }
    return 2;
  },
};
