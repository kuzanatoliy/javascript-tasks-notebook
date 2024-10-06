module.exports = {
  getMap: (num, k) => {
    if (k > (num + 1) / 2) {
      return -1;
    }
    const res = new Array(num);
    for (let j = 0; j < num; j++) {
      res[j] = new Array(num).fill('.');
    }
    for (let jj = 0; jj < k; jj++) {
      const index = jj * 2;
      res[index][index] = 'R';
    }
    return res;
  },
};
