module.exports = {
  getPermutation: (num) => {
    if (num < 5) {
      return [-1];
    }
    const res = [1, 3];
    for (let j = 7; j <= num; j += 2) {
      res.push(j);
    }
    res.push(5);
    for (let jj = 4; jj <= num; jj += 2) {
      res.push(jj);
    }
    res.push(2);
    return res;
  },
};
