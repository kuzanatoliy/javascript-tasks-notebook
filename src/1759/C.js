module.exports = {
  getMinOperationsCount: (l, r, x, a, b) => {
    if (a === b) {
      return 0;
    }

    if (Math.abs(l - r) < x) {
      return -1;
    }

    if (Math.abs(a - b) >= x) {
      return 1;
    }

    if (a > b) {
      const tmp = a;
      a = b;
      b = tmp;
    }

    if (r - b >= x || a - l >= x) {
      return 2;
    }

    if (r - a >= x && b - l >= x) {
      return 3;
    }

    return -1;
  },
};
