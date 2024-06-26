module.exports = {
  getCountOfMoves: (a, b) => {
    if (a === b) {
      return 0;
    }
    let min = a;
    let max = b;
    if (a > b) {
      min = b;
      max = a;
    }
    if (max % 2n === 1n || max % min !== 0n) {
      return -1;
    }
    let d = max / min;
    let count = 0;
    while (d > 1n) {
      if (d % 2n !== 0n) {
        return -1;
      }
      d /= 2n;
      count++;
    }
    return Math.ceil(count / 3);
  },
};
