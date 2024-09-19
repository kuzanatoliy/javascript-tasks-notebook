module.exports = {
  getCountOfCells: (num, k) => {
    const d = 2 * num - 2;
    const kk = Math.ceil(k / 2);
    if (d >= kk) {
      return kk;
    }
    return k - d;
  },
};
