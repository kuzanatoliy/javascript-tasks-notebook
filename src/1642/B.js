module.exports = {
  getMinPowers: (arr) => {
    const { size } = new Set(arr);
    return arr.map((_, ind) => Math.max(size, ind + 1));
  },
};
