module.exports = {
  getCountOfMoves: (rows, cols, r, c) =>
    Math.max(rows - r, r - 1) + Math.max(cols - c, c - 1),
};
