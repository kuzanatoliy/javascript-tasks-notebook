module.exports = {
  getPermutation: (num) => {
    const d = Math.ceil(num / 2);
    const res = [];
    for (let j = 0; j < d; j++) {
      res.push(num - j);
      res.push(j + 1);
    }
    res.length = num;
    return res;
  },
};
