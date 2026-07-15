/* eslint-disable max-depth */
const gcd = (a, b) => {
  if (a === 0n) {
    return b;
  }
  if (b === 0n) {
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
  findD: (arr) => {
    const gcD = [arr[0], arr[1]];
    for (let i = 0; i < arr.length; i++) {
      gcD[i % 2] = gcd(gcD[i % 2], arr[i]);
    }
    for (let i = 0; i < 2; i++) {
      let res = -1n;
      let flag = 1n;
      if (gcD[i] !== 1n) {
        for (let j = 0; j < arr.length; j++) {
          let t;
          if (arr[j] % gcD[i]) {
            t = 0n;
          } else {
            t = 1n;
          }
          if (res === t) {
            flag = 0n;
            break;
          }
          res = t;
        }
        if (flag === 1n) {
          return gcD[i];
        }
      }
    }
    return 0n;
  },
};
