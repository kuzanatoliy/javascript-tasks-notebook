module.exports = {
  getCountOfOperations: (str) =>
    str.length > 26 ? -1 : str.length - new Set(str.split('')).size,
};
