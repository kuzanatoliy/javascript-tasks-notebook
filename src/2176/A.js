module.exports = {
  getCountOfOperations: (arr) => {
    let count = 0;
    let max = 0;
    for (let j = 1; j < arr.length; j++) {
      if (arr[max] < arr[j]) {
        max = j;
      }
      count += arr[max] > arr[j];
    }
    return count;
  },
};
