const gcd = (a, b) => {
  if (a === 0) {
    return b;
  }
  if (b === 0) {
    return a;
  }

  while (a) {
    const r = b % a;
    b = a;
    a = r;
  }
  return b;
};

module.exports = {
  getCountOfPairs: (array) => {
    const arr = array.sort((a, b) => {
      const i = a & 1;
      const j = b & 1;
      if (i === j) {
        return 0;
      } else if (i) {
        return 1;
      } else {
        return -1;
      }
    });
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      for (let jj = j + 1; jj < arr.length; jj++) {
        if (gcd(arr[j], arr[jj] * 2) > 1) {
          count++;
        }
      }
    }
    return count;
  },
};
