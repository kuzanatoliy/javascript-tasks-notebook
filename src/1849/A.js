module.exports = {
  getMaxCountOfLayers: (b, c, h) => {
    const sum = c + h;
    return b > sum ? sum * 2 + 1 : b * 2 - 1;
  },
};
