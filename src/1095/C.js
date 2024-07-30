module.exports = {
  isItPossibleToRepresent: (n, k) => {
    if (k > n) {
      return ['NO'];
    }
    const temp = [];
    while (n > 0) {
      temp.push(n % 2);
      n >>= 1;
    }
    let count = temp.reduce((a, b) => a + b);
    if (count > k) {
      return ['NO'];
    }
    for (let j = temp.length - 1; j >= 0; j--) {
      if (temp[j] && count < k) {
        const d = k - count;
        if (d > temp[j]) {
          temp[j - 1] += temp[j] * 2;
          count += temp[j];
          temp[j] = 0;
        } else {
          temp[j - 1] += d * 2;
          temp[j] -= d;
          count += d;
          break;
        }
      }
    }
    let curr = 1;
    const res = [];
    for (let j = 0; j < temp.length; j++) {
      while (temp[j]) {
        res.push(curr);
        temp[j]--;
      }
      curr *= 2;
    }
    return ['YES', res];
  },
};
