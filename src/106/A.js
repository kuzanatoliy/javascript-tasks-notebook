/* eslint-disable sort-keys */
const VALUES = { 6: 1, 7: 2, 8: 3, 9: 4, T: 5, J: 6, Q: 7, K: 8, A: 9 };

module.exports = {
  isWinner: (ts, card1, card2) =>
    (card1[1] === card2[1] && VALUES[card1[0]] > VALUES[card2[0]]) ||
    (card1[1] === ts && card2[1] !== ts)
      ? 'YES'
      : 'NO',
};
