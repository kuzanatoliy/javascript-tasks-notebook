module.exports = {
  getPermutation: (array) => {
    const max = Math.max(...array) + 1;
    return array.map((item) => max - item);
  },
};
