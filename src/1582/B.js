module.exports = {
  getCountOfSubarrs: (arr) => {
    let count = 0n;
    let c0 = 0n;
    for (let j = 0; j < arr.length; j++) {
      count += BigInt(arr[j] === 1n);
      c0 += BigInt(arr[j] === 0n);
    }
    return count * 2n ** c0;
  },
};
