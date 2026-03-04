module.exports = {
  getPermutation: (num) => {
    const res = [];
    for (let j = 1; j <= num; j++) {
      res.push(j);
      res.push(num - j + 1);
    }
    res.length = num;
    return res.reverse();
  },
};
