module.exports = {
  getMinAbount: (x, y, a, b) => {
    if (x > y) {
      const temp = x;
      x = y;
      y = temp;
    }
    const res1 = b * x + a * (y - x);
    const res2 = a * (x + y);
    return res1 < res2 ? res1 : res2;
  },
};
