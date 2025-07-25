module.exports = {
  getMinSum: (arr) => {
    arr.sort((a, b) => a - b);
    const n = arr.length / 2;
    let sum = 0;
    for (let j = 0; j < n; j++) {
      sum += (arr[j] + arr[arr.length - j - 1]) ** 2;
    }
    return sum;
  },
};
