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
  getMaxCountOfElements: (arr) => {
    let a = 0;
    for (let j = 0; j < arr.length; j++) {
      a = gcd(a, arr[j]);
    }
    return arr[arr.length - 1] / a;
  },
};
