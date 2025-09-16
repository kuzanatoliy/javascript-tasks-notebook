module.exports = {
  getPermutation: (arr) => arr.map((item, _, array) => array.length + 1 - item),
};
