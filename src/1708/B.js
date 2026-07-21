module.exports = {
  isItPossibleToBuildArray: (num, l, r) => {
    const res = [];
    for (let j = 1; j <= num; j++) {
      const d = (Math.floor((l - 1) / j) + 1) * j;
      if (d > r) {
        return ['NO'];
      }
      res.push(d);
    }
    return ['YES', res];
  },
};
