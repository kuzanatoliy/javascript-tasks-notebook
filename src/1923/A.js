module.exports = {
  getCountOfSteps: (arr) => {
    let count = 0;
    let l = 0;
    while (l < arr.length && arr[l] === 0) {
      l++;
    }
    let r = arr.length - 1;
    while (r > l && arr[r] === 0) {
      r--;
    }
    for (let j = l + 1; j < r; j++) {
      if (arr[j] === 0) {
        count++;
      }
    }
    return count;
  },
};
