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
  getMaxGCD: (arr) => {
    let sum = arr.reduce((a, b) => a + b);
    let cand = 0;
    let max = -Infinity;
    for (let j = 0; j < arr.length - 1; j++) {
      cand += arr[j];
      sum -= arr[j];
      max = Math.max(max, gcd(cand, sum));
    }
    return max;
  },
};
