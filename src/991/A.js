module.exports = {
  getLooserCount: (a, b, c, num) => {
    a -= c;
    b -= c;
    if (a < 0 || b < 0) {
      return -1;
    }
    const res = num - a - b - c;
    return res > 0 ? res : -1;
  },
};
