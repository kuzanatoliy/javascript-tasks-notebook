module.exports = {
  getCountOfDays: (c, v0, v1, a, l) => {
    let count = 1;
    c -= v0;
    v0 -= l;
    v1 -= l;
    while (c > 0 && v0 < v1) {
      v0 = Math.min(v0 + a, v1);
      c -= v0;
      count++;
    }
    return count + (c > 0 ? Math.ceil(c / v0) : 0);
  },
};
