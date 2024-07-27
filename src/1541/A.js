module.exports = {
  getPermutation: (number) => {
    let k = 0;
    const res = [];
    while (k !== number) {
      if (number - k === 3) {
        res.push(k + 2);
        res.push(k + 3);
        res.push(k + 1);
        k += 3;
        continue;
      }
      res.push(k + 2);
      res.push(k + 1);
      k += 2;
    }
    return res;
  },
};
