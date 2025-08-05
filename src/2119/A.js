module.exports = {
  getMinCost: (a, b, x, y) => {
    if (b < a) {
      if ((a ^ 1) === b) {
        return y;
      }
      return -1;
    }
    const d = b - a;
    if (x <= y) {
      return d * x;
    }
    let c = 0;
    for (let j = a; j < b; j++) {
      if (j % 2 === 0) {
        c += y;
      } else {
        c += x;
      }
    }
    return c;
  },
};
