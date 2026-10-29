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
  isItPossibleToSort: (x, y, arr) => {
    const g = gcd(x, y);
    for (let j = 0; j < arr.length; j++) {
      if (Math.abs(arr[j] - j - 1) % g) {
        return 'NO';
      }
    }
    return 'YES';
  },
};
