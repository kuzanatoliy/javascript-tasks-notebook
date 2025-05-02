module.exports = {
  getFinalExpensives: (num) => {
    let res = 0;
    while (num >= 10) {
      const d = num % 10;
      const s = num - d;
      res += s;
      num = s / 10 + d;
    }
    return res + num;
  },
};
