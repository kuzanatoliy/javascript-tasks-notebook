module.exports = {
  transformArray: (arr) => {
    for (let jj = 0; jj < arr.length; jj++) {
      arr[jj]++;
    }
    for (let j = 1; j < arr.length; j++) {
      if (arr[j] % arr[j - 1] === 0) {
        arr[j]++;
      }
    }
    return arr;
  },
};
