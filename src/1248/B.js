module.exports = {
  getLargestDistance: (arr) => {
    arr.sort((a, b) => a - b);
    const mid = Math.floor(arr.length / 2);
    let sum1 = 0n;
    for (let j = 0; j < mid; j++) {
      sum1 += BigInt(arr[j]);
    }
    let sum2 = 0n;
    for (let jj = mid; jj < arr.length; jj++) {
      sum2 += BigInt(arr[jj]);
    }
    return (sum1 * sum1 + sum2 * sum2).toString();
  },
};
