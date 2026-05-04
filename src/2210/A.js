module.exports = {
  getPermutation: (num) => new Array(num).fill(0).map((item, ind) => num - ind),
};
