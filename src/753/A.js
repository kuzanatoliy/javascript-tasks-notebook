module.exports = {
  buildSet: (num) => {
    const res = [];
    for (let j = 1; j <= num; j++) {
      res.push(j);
      num -= j;
    }
    res[res.length - 1] += num;
    return res;
  },
};
