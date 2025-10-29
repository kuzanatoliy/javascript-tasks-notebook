module.exports = {
  getPermutation: (num) =>
    num % 2
      ? new Array(num).fill(0).map((_, ind, arr) => arr.length - ind)
      : [-1],
};
