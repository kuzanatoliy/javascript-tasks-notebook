module.exports = {
  isItPossibleToWin: (k, a1, b1, a2, b2) => {
    const d = a1 + a2 - b1 - b2;
    if (d > k || (d === k && a1 > b1 && a2 > b2)) {
      return 'NO';
    }
    return 'YES';
  },
};
