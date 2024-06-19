module.exports = {
  isItPossibleToWin: (length, sum) => {
    const n = Math.floor(sum / length);
    if (n <= 1) {
      return ['NO'];
    } else {
      const res = ['YES', [], 1];
      for (let i = 0; i < length - 1; i++) {
        res[1].push(n);
      }
      res[1].push(sum - n * (length - 1));
      return res;
    }
  },
};
