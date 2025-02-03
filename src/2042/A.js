module.exports = {
  getCountOfCoins: (arr, k) => {
    arr.sort((a, b) => b - a);
    let sum = 0;
    for (let j = 0; sum + arr[j] <= k && j < arr.length; j++) {
      sum += arr[j];
    }
    return k - sum;
  },
};
