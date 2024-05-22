module.exports = {
  getOrder: (c0, c1) => {
    if (c0 - c1 > 1 || c1 - c0 < -1 || c1 - 2 * c0 > 2) {
      return -1;
    }

    let str = '';

    if (c0 > c1) {
      str += '0';
      c0--;
    }

    while (c1 > c0 && c0 > 0) {
      str += '110';
      c1 -= 2;
      c0--;
    }

    while (c1 > 0 && c0 > 0) {
      str += '10';
      c1--;
      c0--;
    }

    while (c1 > 0) {
      str += '1';
      c1--;
    }

    return str;
  },
};
