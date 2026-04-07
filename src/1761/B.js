module.exports = {
  getMaxCountOfOperations: (arr) =>
    new Set(arr).size === 2 ? Math.floor(arr.length / 2) + 1 : arr.length,
};
