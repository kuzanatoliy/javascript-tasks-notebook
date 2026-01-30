module.exports = {
  getCountOfMoves: (num, m, sx, sy, d) =>
    (sx - d <= 1 || sy + d >= m) && (sx + d >= num || sy - d <= 1)
      ? -1
      : num + m - 2,
};
