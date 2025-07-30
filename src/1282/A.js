module.exports = {
  getDistance: (a, b, c, r) => {
    const d1 = c - r;
    const d2 = c + r;
    let f = a;
    let l = b;
    if (f > l) {
      f = b;
      l = a;
    }
    if (f > d2 || l < d1) {
      return l - f;
    }
    let d = 0;
    if (f < d1) {
      d += d1 - f;
    }
    if (l > d2) {
      d += l - d2;
    }
    return d;
  },
};
