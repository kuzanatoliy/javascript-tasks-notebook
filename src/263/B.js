module.exports = {
  getCountOfDays: (arr, k) => {
    const ind = arr.length - k;
    if (ind < 0) {
      return [-1];
    }
    arr.sort((a, b) => a - b);
    return arr[ind] !== arr[ind - 1] ? [arr[ind], 0] : [-1];
  },
};
