module.exports = {
  getPermutation: (num) => Array.from({ length: num }, (_, ind) => num - ind),
};
