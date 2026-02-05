module.exports = {
  getMaxScore: (num) => {
    let res = 0;
    for (let j = 1; j <= num; j++) {
      res += 1 / j;
    }
    return res;
  },
};
