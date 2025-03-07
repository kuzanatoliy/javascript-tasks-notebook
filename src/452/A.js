module.exports = {
  getCrystal: (num) => {
    const res = new Array(num);
    const d = Math.floor(num / 2);
    for (let j = 0; j < d; j++) {
      res[j] = new Array(num).fill('D');
      for (let jj = d - j - 1; jj >= 0; jj--) {
        res[j][jj] = '*';
        res[j][num - jj - 1] = '*';
      }
      res[num - j - 1] = [...res[j]];
    }
    res[d] = new Array(num).fill('D');
    return res;
  },
};
