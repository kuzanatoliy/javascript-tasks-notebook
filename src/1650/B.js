module.exports = {
  getMaxValue: (l, r, a) => {
    const m1 = r % a;
    const c2 = r - m1 - 1;
    const m2 = c2 % a;
    return c2 < l || m2 === m1
      ? Math.floor(r / a) + m1
      : Math.floor(c2 / a) + m2;
  },
};
