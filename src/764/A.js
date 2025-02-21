module.exports = {
  getCountOfNums: (num, m, z) => {
    let count = 0;
    for (let j = m; j <= z; j += m) {
      if (j % num === 0) {
        count++;
      }
    }
    return count;
  },
};
