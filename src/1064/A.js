module.exports = {
  getCountOfOperations: (arr) => {
    arr.sort((a, b) => a - b);
    return arr[2] < arr[0] + arr[1] ? 0 : arr[2] - arr[0] - arr[1] + 1;
  },
};
