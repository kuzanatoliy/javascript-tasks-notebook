module.exports = {
  getCountOfMoves: (number, target) => {
    const d = Math.abs(number - target);
    let c = Math.floor(d / 10);
    if (d % 10 > 0) {
      c++;
    }
    return c;
  },
};
