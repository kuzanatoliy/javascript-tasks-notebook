module.exports = {
  getCountOfOperations: (arr) => Math.min(...arr.map((item) => Math.abs(item))),
};
