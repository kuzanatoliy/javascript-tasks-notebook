module.exports = {
  getInnerNumber: (arr) => {
    const min = Math.min(...arr);
    if (min >= 0) {
      return Math.max(...arr);
    }
    return min;
  },
};
