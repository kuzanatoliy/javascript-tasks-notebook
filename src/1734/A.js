module.exports = {
  getMinCountOfOperations: (arr) => {
    arr.sort((a, b) => a - b);
    const sums = [];
    for (let j = 2; j < arr.length; j++) {
      sums.push(
        Math.min(
          Math.abs(arr[j] - arr[j - 1]) + Math.abs(arr[j] - arr[j - 2]),
          Math.abs(arr[j - 1] - arr[j]) + Math.abs(arr[j - 1] - arr[j - 2]),
          Math.abs(arr[j - 2] - arr[j - 1]) + Math.abs(arr[j - 2] - arr[j])
        )
      );
    }
    return Math.min(...sums);
  },
};
