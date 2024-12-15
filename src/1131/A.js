module.exports = {
  getCountOfCells: (w1, h1, w2, h2) => {
    const s1 = 2 * h1 + w1 + 2;
    const s2 = 2 * h2 + w2 + 2;
    return s1 + s2 + w1 - w2;
  },
};
