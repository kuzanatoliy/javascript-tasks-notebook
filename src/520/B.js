module.exports = {
  getCountOfMoves: (a, b) => {
    let i = 0;
    while (a < b) {
      b = b % 2 === 1 ? b + 1 : b / 2;
      i++;
    }
    return i + a - b;
  },
};
