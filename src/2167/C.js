module.exports = {
  sortArray: (arr) => {
    for (let j = 1; j < arr.length; j++) {
      if (arr[j] % 2 !== arr[j - 1] % 2) {
        return arr.sort((a, b) => a - b);
      }
    }
    return arr;
  },
};
