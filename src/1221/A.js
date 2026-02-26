module.exports = {
  isItPossibleToWin: (arr) =>
    arr.filter((item) => item <= 2048).reduce((a, b) => a + b, 0) >= 2048
      ? 'YES'
      : 'NO',
};
