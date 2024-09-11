module.exports = {
  getPermutation: (array) => {
    const map = new Map();
    for (let j = 0; j < array.length; j++) {
      if (map.has(array[j])) {
        map.get(array[j]).push(j);
        continue;
      }
      map.set(array[j], [j]);
    }
    const marr = Array.from(map);
    const res = new Array(array.length);
    for (let jj = 0; jj < marr.length; jj++) {
      if (marr[jj][1].length === 1) {
        return [-1];
      }
      for (let jjj = 1; jjj < marr[jj][1].length; jjj++) {
        res[marr[jj][1][jjj - 1]] = marr[jj][1][jjj] + 1;
      }
      res[marr[jj][1][marr[jj][1].length - 1]] = marr[jj][1][0] + 1;
    }
    return res;
  },
};
