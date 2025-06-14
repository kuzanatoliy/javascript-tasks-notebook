const x = (x1, x2, x3) => {
  const mx = Math.max(x2, x3);
  const mn = Math.min(x2, x3);
  return +!((mx - mn) % 2);
};

module.exports = {
  getVariants: (a, b, c) => [x(a, b, c), x(b, a, c), x(c, a, b)],
};
