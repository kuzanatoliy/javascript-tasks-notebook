module.exports = {
  getDelay: (num, k) => {
    num--;
    let curr = 1n;
    let count = 0n;
    while (num > 0n && curr < k) {
      count++;
      num -= curr;
      curr *= 2n;
    }
    return count + (num > 0n ? num / k + (num % k ? 1n : 0n) : 0n);
  },
};
