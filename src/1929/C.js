module.exports = {
  isItPossibleToWin: (k, x, a) => {
    if (a <= x) {
      return 'NO';
    }
    if (k - 1 > x) {
      return 'YES';
    }
    let used = 0;
    for (let i = 0; i <= x; i++) {
      const bet = Math.floor(used / (k - 1)) + 1;
      used += bet;
      if (used > a) {
        return 'NO';
      }
    }
    return 'YES';
  },
};
