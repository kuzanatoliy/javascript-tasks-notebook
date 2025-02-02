module.exports = {
  getCountOfOperations: (mask) =>
    mask
      .split('')
      .map((item) => +item)
      .reduce((a, b) => a + b, 0),
};
