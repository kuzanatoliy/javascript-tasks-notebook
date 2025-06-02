module.exports = {
  isItPossibleToBalanceDecks: (a, b, c) => {
    const dif = c - b - (b - a);
    return dif >= 0 && dif % 3 === 0 ? 'YES' : 'NO';
  },
};
