module.exports = {
  getFinalNumbersOfCards: (numbersOfCards) => {
    let n = numbersOfCards - 1;
    let a1 = 1;
    let a2 = 0;
    let b1 = 0;
    let b2 = 0;
    let j = 4;
    let f = false;
    let d = 0;
    while (n >= j + 1) {
      d = Math.floor(j / 2);
      if (f) {
        a1 += d + 1;
        a2 += d;
      } else {
        b1 += d;
        b2 += d + 1;
      }
      n -= j + 1;
      j += 4;
      f = !f;
    }
    d = Math.floor(n / 2);
    if (f) {
      a1 += d + (n - 2 * d);
      a2 += d;
    } else {
      b1 += d;
      b2 += d + (n - 2 * d);
    }
    return [a1, a2, b1, b2];
  },
};
