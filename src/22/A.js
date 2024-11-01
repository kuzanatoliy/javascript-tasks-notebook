module.exports = {
  getSecondOrderStatistic: (arr) => {
    const set = new Set(arr);
    if (set.size === 1) {
      return 'NO';
    }
    const array = Array.from(set).sort((a, b) => a - b);
    return array[1];
  },
};
