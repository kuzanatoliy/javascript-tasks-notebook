module.exports = {
  getSet: (num, k) => {
    const res = [];
    while (num > k) {
      res.push(num);
      num--;
    }
    const d = Math.floor(k / 2);
    k--;
    for (let j = 0; j < d; j++) {
      res.push(k);
      k--;
    }
    return res;
  },
};
