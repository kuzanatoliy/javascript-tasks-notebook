module.exports = {
  getCountOfPairs: (arr) => {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      count +=
        arr[j] === 1 || (arr[j] === 0 && arr[j - 1] === 1 && arr[j + 1] === 1);
    }
    return count;
  },
};
