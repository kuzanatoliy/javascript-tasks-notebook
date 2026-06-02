module.exports = {
  buildArray: (num) => {
    const res = [1];
    for (let j = 1; j < num; j++) {
      res.push(res[j - 1] + 2);
    }
    return res;
  },
};
