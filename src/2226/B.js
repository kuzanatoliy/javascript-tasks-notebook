const gcd = (a, b) => {
  if (a === 0) {
    return b;
  }
  if (b === 0) {
    return a;
  }
  if (a < b) {
    const r = a;
    a = b;
    b = r;
  }

  while (a) {
    const r = b % a;
    b = a;
    a = r;
  }
  return b;
};

module.exports = {
  getGoodSubarrCount: (arr) => {
    let count = 0;
    for (let j = 1; j < arr.length; j++) {
      count += Math.abs(arr[j - 1] - arr[j]) === gcd(arr[j - 1], arr[j]);
    }
    return count;
  },
};
