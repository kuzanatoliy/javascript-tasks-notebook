module.exports = {
  isItPossibleToWin: (k, arr) =>
    arr.reduce((a, b) => a + b, 0) % 2 || !((arr.length * k) % 2)
      ? 'YES'
      : 'NO',
};
