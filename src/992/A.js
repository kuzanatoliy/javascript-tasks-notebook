module.exports = {
  getCountOfSteps: (arr) => {
    const set = new Set(arr);
    return set.has(0) ? set.size - 1 : set.size;
  },
};
