module.exports = {
  getPermutation: (num) => {
    const res = [num];
    for (let j = 1; j < num; j++) {
      res.push(j);
    }
    return res;
  },
};
