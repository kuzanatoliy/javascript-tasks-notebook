module.exports = {
  getCountOfCoins: (coins) => {
    const a1 = Math.floor(coins / 3);
    const a2 = coins % 3;
    if (a2 === 2) {
      return [a1, a1 + 1];
    }
    if (a2 === 1) {
      return [a1 + 1, a1];
    }
    return [a1, a1];
  },
};
