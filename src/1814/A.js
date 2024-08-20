module.exports = {
  isItPossibleToRepresentInCoins: (number, k) => {
    const x = number - k;
    const y = number - 2 * k;
    return (x >= 0 && x % 2 === 0) ||
      (y >= 0 && y % 2 === 0) ||
      number % 2 === 0
      ? 'YES'
      : 'NO';
  },
};
