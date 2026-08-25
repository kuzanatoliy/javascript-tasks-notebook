module.exports = {
  getMinorReduction: (per, map) => {
    const res = new Array(per.length).fill(-1);
    for (let j = 0; j < per.length; j++) {
      if (res[j] !== -1) {
        continue;
      }
      let count = map[j] === '0' ? 1 : 0;
      let next = per[j] - 1;
      while (next !== j) {
        count += map[next] === '0';
        next = per[next] - 1;
      }
      res[j] = count;
      next = per[j] - 1;
      while (next !== j) {
        res[next] = count;
        next = per[next] - 1;
      }
    }
    return res;
  },
};
