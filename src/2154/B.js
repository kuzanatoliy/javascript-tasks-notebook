module.exports = {
  getCountOfOperations: (arr) => {
    for (let j = 1; j < arr.length; j += 2) {
      arr[j] = Math.max(arr[j], arr[j - 1], arr[j - 2] || 0);
    }
    let count = arr[1] <= arr[0] ? arr[0] - arr[1] + 1 : 0;
    for (let jj = 1; jj < arr.length; jj += 2) {
      count += arr[jj] <= (arr[jj + 1] || 0) ? arr[jj + 1] - arr[jj] + 1 : 0;
    }
    return count;
  },
};
