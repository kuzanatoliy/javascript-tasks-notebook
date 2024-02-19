module.exports = {
  getCountOfMoves: (a, b) => {
    if (a === b) {
      return 0;
    }
    if (a > b) {
      return (a - b) % 2 === 0 ? 1 : 2;
    }
    return (b - a) % 2 === 0 ? 2 : 1;
  },
};
