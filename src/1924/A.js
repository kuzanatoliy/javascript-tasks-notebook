module.exports = {
  isItPossibleTodistributeCoins: (a, b, c, coins) => {
    const sorted = [a, b, c].sort((i1, i2) => i1 - i2);
    return (coins + a + b + c) % 3 === 0 &&
      sorted[2] - sorted[1] + (sorted[2] - sorted[0]) < coins
      ? 'YES'
      : 'NO';
  },
};
