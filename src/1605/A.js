module.exports = {
  getMinCount: (array) =>
    Math.abs(array[0] + array[2] - array[1] * 2) % 3 === 0 ? 0 : 1,
};
