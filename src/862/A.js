module.exports = {
  getCountOfOperations: (x, arr) => {
    const set = new Set(arr);
    let count = 0;
    for (let j = 0; j < x; j++) {
      count += !set.has(j);
    }
    return count + arr.reduce((sum, val) => sum + (val === x), 0);
  },
};
