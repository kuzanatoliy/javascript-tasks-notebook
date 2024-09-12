module.exports = {
  isItPossibleToGetSum: (a, b) =>
    (b % 2 === 1 && a % 2 === 0 && a >= 2) ||
    ((a + 2 * b) % 2 === 0 && b % 2 === 0)
      ? 'YES'
      : 'NO',
};
