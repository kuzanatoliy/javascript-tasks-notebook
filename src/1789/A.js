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
  isItPossibleToTransformArray: (array) => {
    for (let j = 0; j < array.length - 1; j++) {
      for (let jj = j + 1; jj < array.length; jj++) {
        if (gcd(array[j], array[jj]) <= 2) {
          return 'YES';
        }
      }
    }
    return 'NO';
  },
};
