module.exports = {
  getIntegers: (num) => {
    const res = [1];
    for (let j = 0; j < num - 1; j++) {
      res.push(res[j] + 2);
    }
    return res;
  },
};
