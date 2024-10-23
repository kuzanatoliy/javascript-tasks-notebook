module.exports = {
  getCountOfMoves: (num) => {
    let count = 0n;
    while (num % 2n === 0n) {
      count += 1n;
      num /= 2n;
    }
    while (num % 3n === 0n) {
      count += 2n;
      num /= 3n;
    }
    while (num % 5n === 0n) {
      count += 3n;
      num /= 5n;
    }
    return num === 1n ? count : -1n;
  },
};
