module.exports = {
  getPointC: (x, y) => {
    if ((x + y) % 2 === 1) {
      return [-1, -1];
    }
    return [Math.floor(x / 2), Math.ceil(y / 2)];
  },
};
