module.exports = {
  getCountOfMoves: (lines, k) => {
    const d = lines.reduce((sum, line) => sum + line[1] - line[0] + 1, 0) % k;
    return d === 0 ? 0 : k - d;
  },
};
