module.exports = {
  buildMatrix: (num, k) => {
    if (k < num || k >= 2 * num) {
      return -1;
    }
    const m = Array.from({ length: num }, () => new Array(num).fill(0));
    const d = k - num;
    for (let j = 0; j < d + 1; j++) {
      m[0][j] = j + 1;
    }
    for (let jj = 0; jj < num - d - 1; jj++) {
      m[num - 1 - jj][num - 1 - jj] = num - jj;
    }
    let next = num + 1;
    for (let jjj = 0; jjj < num; jjj++) {
      for (let jjjj = 0; jjjj < num; jjjj++) {
        if (!m[jjj][jjjj]) {
          m[jjj][jjjj] = next;
          next++;
        }
      }
    }
    return m;
  },
};
