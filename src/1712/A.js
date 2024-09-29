module.exports = {
  getCountOfOperations: (arr, k) => {
    let count = 0;
    for (let j = 0; j < k; j++) {
      if (arr[j] > k) {
        count++;
      }
    }
    return count;
  },
};
