module.exports = {
  getMaxValue: (arr) => {
    arr.sort((a, b) => a - b);
    return (
      Math.abs(arr[0] - arr[arr.length - 1]) +
      Math.abs(arr[arr.length - 1] - arr[1]) +
      Math.abs(arr[1] - arr[arr.length - 2]) +
      Math.abs(arr[arr.length - 2] - arr[0])
    );
  },
};
