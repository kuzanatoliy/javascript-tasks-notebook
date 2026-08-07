module.exports = {
  isItPossibleToBuildArray: (num, k, m) => {
    if (k > m) {
      return ['NO'];
    }
    const res = [];
    for (let j = 0; j < num; j++) {
      res.push(j % k === 0 ? m - k + 1 : 1);
    }
    return ['YES', res];
  },
};
