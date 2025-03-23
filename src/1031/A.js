module.exports = {
  getCountOfCells: (h, w, k) => {
    let count = 0;
    for (let j = 0; j < k; j++) {
      count += (h - j * 4) * 2 + (w - 2 - j * 4) * 2;
    }
    return count;
  },
};
