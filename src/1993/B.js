module.exports = {
  getOperationsCount: (arr) => {
    const odd = [];
    const even = [];
    let max = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] % 2) {
        odd.push(arr[j]);
        max = Math.max(max, arr[j]);
      } else {
        even.push(arr[j]);
      }
    }
    if (!odd.length || !even.length) {
      return 0;
    }
    even.sort((a, b) => a - b);
    let count = 0;
    for (let jj = 0; jj < even.length; jj++) {
      if (max < even[jj]) {
        count++;
        max += even[even.length - 1];
      }
      max += even[jj];
      count++;
    }
    return count;
  },
};
