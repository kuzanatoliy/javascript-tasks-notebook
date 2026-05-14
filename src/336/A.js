module.exports = {
  getCoordinates: (x, y) => {
    const d = Math.abs(x) + Math.abs(y);
    const my = d * (y > 0 ? 1 : -1);
    return x > 0 ? [0, my, d, 0] : [-d, 0, 0, my];
  },
};
