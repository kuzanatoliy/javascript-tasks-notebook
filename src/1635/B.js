module.exports = {
  getCountOfOperations: (arr) => {
    let count = 0;
    for (let j = 1; j < arr.length - 1; j++) {
      if (
        arr[j - 1] < arr[j] &&
        arr[j] > arr[j + 1] &&
        arr[j + 1] < arr[j + 2] &&
        arr[j + 2] > arr[j + 3]
      ) {
        count++;
        arr[j + 1] = Math.max(arr[j], arr[j + 2]);
        continue;
      }
      if (arr[j - 1] < arr[j] && arr[j] > arr[j + 1]) {
        count++;
        arr[j + 1] = arr[j];
      }
    }
    return [count, arr];
  },
};
