const gcd = (a, b) => {
  if (a === 0n) {
    return b;
  }
  if (b === 0n) {
    return a;
  }
  if (a < b) {
    const r = a;
    a = b;
    b = r;
  }

  while (a) {
    const r = b % a;
    b = a;
    a = r;
  }
  return b;
};

module.exports = {
  getVariantCount: (w, h, x, y) => {
    const d = gcd(x, y);
    x /= d;
    y /= d;
    const dw = w / x;
    const dh = h / y;
    return dw > dh ? dh : dw;
  },
};
