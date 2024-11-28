module.exports = {
  getCountOfGoodPermutations: (arr) => {
    const min = arr.reduce((a, b) => a & b, ~0);
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      count += +(arr[j] === min);
    }
    if (count === 0 || count === 1) {
      return 0;
    }
    if (count > 1000000007) {
      count %= 1000000007;
    }
    let res = 1;
    for (let jj = 2; jj < arr.length - 1; jj++) {
      res *= jj;
      if (res > 1000000007) {
        res %= 1000000007;
      }
    }
    return (((res * count) % 1000000007) * (count - 1)) % 1000000007;
  },
};
