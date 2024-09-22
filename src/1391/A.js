module.exports = {
  getPermutation: (num) => {
    const res = [];
    for (let j = 1; j <= num; j++) {
      res.push(j);
    }
    return res;
  },
};
