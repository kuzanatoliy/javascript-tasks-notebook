module.exports = {
  getMinTiredness: (x1, x2) => {
    let d = Math.abs(x1 - x2);
    let step = 1;
    let res = 0;
    while (d > 1) {
      res += 2 * step;
      step++;
      d -= 2;
    }
    if (d === 1) {
      res += step;
    }
    return res;
  },
};
