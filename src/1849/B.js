module.exports = {
  getOrder: (arr, k) =>
    arr
      .map((item, ind) => [item % k || k, ind])
      .sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : b[0] - a[0]))
      .map((item) => item[1] + 1),
};
