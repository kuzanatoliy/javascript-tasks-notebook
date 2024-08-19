module.exports = {
  getNewPrice: (array) =>
    Math.ceil(array.reduce((sum, item) => sum + item) / array.length),
};
