module.exports = {
  getCountOfCakes: (arr, k) => {
    arr.sort((a, b) => b - a);
    let sum = 0;
    for (let j = 0; j < arr.length && j <= k; j++) {
      sum += arr[j] * (k - j);
    }
    return sum;
  },
};
