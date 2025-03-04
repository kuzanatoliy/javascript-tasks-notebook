module.exports = {
  getCountOfWays: (arr) => {
    const set = new Set(arr);
    let count = set.size;
    if (set.has(0)) {
      count--;
    }
    return count;
  },
};
