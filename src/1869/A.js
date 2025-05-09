module.exports = {
  getOperations: (arr) =>
    arr.length % 2 === 0
      ? [
          [1, arr.length],
          [1, arr.length],
        ]
      : [
          [1, arr.length - 1],
          [1, arr.length - 1],
          [arr.length - 1, arr.length],
          [arr.length - 1, arr.length],
        ],
};
