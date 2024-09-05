module.exports = {
  getTime: (a, b, c, d) => {
    if (a > b && c <= d) {
      return -1;
    }
    if (a <= b) {
      return b;
    }
    return b + Math.ceil((a - b) / (c - d)) * c;
  },
};
