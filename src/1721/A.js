module.exports = {
  getCountOfOperations: (str) => new Set(str.split('')).size - 1,
};
