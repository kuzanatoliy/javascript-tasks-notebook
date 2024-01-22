module.exports = {
  getFinalNumbersOfCards: (numbersOfCards) => {
    let a = 0;
    let b = 0;
    let j = 1;
    let f = true;
    while (numbersOfCards >= 0) {
      if (j % 2 === 0) {
        f = !f;
      }
      if (f) {
        a += j;
      } else {
        b += j;
      }
      numbersOfCards -= j;
      j++;
    }
    if (f) {
      a += numbersOfCards;
    } else {
      b += numbersOfCards;
    }
    return [a, b];
  },
};
