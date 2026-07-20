/* eslint-disable no-undefined */
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
  getX: (arr) => {
    let res;
    for (let z = 0; z < Math.floor(arr.length / 2); z += 1) {
      if (arr[z] !== arr[arr.length - 1 - z]) {
        const v =
          Math.max(arr[z], arr[arr.length - 1 - z]) -
          Math.min(arr[z], arr[arr.length - 1 - z]);
        if (res === undefined) {
          res = v;
        } else {
          res = gcd(res, v);
        }
      }
    }
    return res ? res : 0;
  },
};
