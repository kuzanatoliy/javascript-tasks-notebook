module.exports = {
  getCountOfPairs: (x, y) => {
    let count = 0;
    const m = Math.sqrt(x);
    for (let a = 0; a <= m; a++) {
      const b = x - a * a;
      if (a + b * b === y && b >= 0) {
        count++;
      }
    }
    return count;
  },
};
