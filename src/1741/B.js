module.exports = {
  getPermutation: (num) => {
    if (num === 3) {
      return [-1];
    }
    const res = [];
    if (num % 2 === 0) {
      for (let j = 0; j < num; j += 2) {
        res.push(j + 2);
        res.push(j + 1);
      }
      return res;
    }
    for (let jj = 2; jj < num; jj++) {
      res.push(jj + 1);
    }
    res.push(1);
    res.push(2);
    return res;
  },
};
