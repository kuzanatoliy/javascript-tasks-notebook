module.exports = {
  isItPossibleToWin: (a, x, y) => {
    const xd = Math.abs(a - x);
    const yd = Math.abs(a - y);
    let i = 100;
    while (i) {
      if (Math.abs(i - x) < xd && Math.abs(i - y) < yd) {
        return 'YES';
      }
      i--;
    }
    return 'NO';
  },
};
