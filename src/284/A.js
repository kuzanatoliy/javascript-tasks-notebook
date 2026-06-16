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
  getCount: (num) => {
    let res = 0;
    num--;
    for (let j = 1; j <= num; j++) {
      res += gcd(j, num) === 1;
    }
    return res;
  },
};
