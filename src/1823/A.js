module.exports = {
  isArrayExist: (num, k) => {
    for (let j = 0; j < num; j++) {
      const jj = num - j;
      const n1 = ((j - 1) * j) / 2;
      const n2 = ((jj - 1) * jj) / 2;
      if (n1 + n2 === k) {
        return ['YES', [...new Array(j).fill(1), ...new Array(jj).fill(-1)]];
      }
    }
    return ['NO'];
  },
};
