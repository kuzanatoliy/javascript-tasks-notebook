module.exports = {
  isItPossibleBuyChunks: (num) =>
    num === 1 || num === 2 || num === 4 || num === 5 || num === 8 || num === 11
      ? 'NO'
      : 'YES',
};
