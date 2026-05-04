module.exports = {
  getMaxSum: (arr) => {
    arr.sort((a, b) => a - b);
    const sum = arr[arr.length - 1];
    arr.length--;
    return arr.reduce((a, b) => a - b, sum);
  },
};
