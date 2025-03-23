module.exports = {
  getCountOfPairs: (array, d) => {
    let count = 0;
    for (let j = 0; j < array.length; j++) {
      for (let jj = j + 1; jj < array.length; jj++) {
        count += Math.abs(array[j] - array[jj]) <= d;
      }
    }
    return count * 2;
  },
};
