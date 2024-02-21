module.exports = {
  getPermutation: (number) => {
    const res = [];
    for (let j = 2; j <= number; j++) {
      res.push(j);
    }
    res.push(1);
    return res;
  },
};
