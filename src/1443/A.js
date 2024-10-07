module.exports = {
  getConfiguration: (num) => {
    const res = [num * 4];
    for (let j = 1; j < num; j++) {
      res[res.length] = res[res.length - 1] - 2;
    }
    return res;
  },
};
