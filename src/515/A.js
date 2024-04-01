module.exports = {
  isItPossibleToMove: (a, b, c) => {
    const minMoves = Math.abs(a) + Math.abs(b);
    if (minMoves > c || (c - minMoves) % 2 === 1) {
      return 'NO';
    }
    return 'YES';
  },
};
