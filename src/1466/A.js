module.exports = {
  getCountOfAreas: (arr) => {
    const set = new Set();
    for (let j = 0; j < arr.length; j++) {
      for (let jj = j + 1; jj < arr.length; jj++) {
        set.add(arr[jj] - arr[j]);
      }
    }
    return set.size;
  },
};
