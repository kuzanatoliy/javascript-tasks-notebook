module.exports = {
  getAmount: (map, c0, c1, h) => {
    let k0 = 0;
    let k1 = 0;
    for (let j = 0; j < map.length; j++) {
      if (map[j] === '0') {
        k0++;
      } else {
        k1++;
      }
    }
    if (h + c0 < c1) {
      return c0 * map.length + h * k1;
    }
    if (h + c1 < c0) {
      return c1 * map.length + h * k0;
    }
    return c0 * k0 + c1 * k1;
  },
};
