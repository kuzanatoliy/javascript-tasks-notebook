module.exports = {
  getCountOfOperations: (x, y) => {
    let c = y.toString().length - x.toString().length;
    let count = 0;
    while (c >= 0) {
      const d = x * 10 ** c;
      if (y >= d) {
        count += Math.floor(y / d);
        y %= d;
      }
      console.log(count, d);
      c--;
    }
    return count + y;
  },
};
