module.exports = {
  isItPossibleToGetArithmeticProgression: (a, b, c) => {
    if (
      (2 * b - c > 0 && (2 * b - c) % a === 0) ||
      (c + a) % (2 * b) === 0 ||
      (2 * b - a > 0 && (2 * b - a) % c === 0)
    ) {
      return 'YES';
    }

    return 'NO';
  },
};
