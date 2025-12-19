module.exports = {
  getCountOfMoves: (a, b, num) => (a > b && b * num > a ? 2 : 1),
};
