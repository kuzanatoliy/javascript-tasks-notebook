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
  getMaxNumber: (arr) => {
    const max = Math.max(...arr);
    const temp = arr.map((item) => max - item).filter((item) => item);
    if (!temp.length) {
      return -1;
    }
    let [cand] = temp;
    for (let j = 1; j < temp.length; j++) {
      cand = gcd(cand, temp[j]);
    }
    return cand;
  },
};
