module.exports = {
  getCountOfMoves: (row, col) => {
    if ((row === 1 && col > 2) || (row > 2 && col === 1)) {
      return -1;
    }
    return 2 * Math.max(row, col) - 2 - ((row + col) % 2);
  },
};
