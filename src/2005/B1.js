module.exports = {
  getCountOfMoves: (num, ms, q) => {
    ms.sort((a, b) => a - b);
    if (q === ms[0] || q === ms[1]) {
      return 0;
    }
    if (q < ms[0]) {
      return ms[0] - 1;
    }
    if (q > ms[1]) {
      return num - ms[1];
    }
    return Math.floor((ms[1] - ms[0]) / 2);
  },
};
