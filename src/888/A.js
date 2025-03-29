module.exports = {
  getCountOfLocalExtremums: (arr) => {
    let count = 0;
    for (let j = 1; j < arr.length - 1; j++) {
      count +=
        (arr[j - 1] < arr[j] && arr[j + 1] < arr[j]) ||
        (arr[j - 1] > arr[j] && arr[j + 1] > arr[j]);
    }
    return count;
  },
};
