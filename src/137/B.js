module.exports = {
  getCountOfChanges: (arr) =>
    arr.length - new Set(arr.filter((item) => item <= arr.length)).size,
};
