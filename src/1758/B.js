module.exports = {
  getArray: (num) =>
    num % 2 === 1
      ? new Array(num).fill(1)
      : [1, 3, ...new Array(num - 2).fill(2)],
};
