module.exports = {
  getCountOfMoves: (num, k) => {
    const l = k - 1;
    const r = num - k;
    return 2 * num + 1 + Math.min(l, r) * 2 + Math.max(l, r);
  },
};
