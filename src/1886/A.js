module.exports = {
  isItPossibleToCreateArray: (num) => {
    const a = 1;
    let b = 2;
    let x = num - 3;

    while (x > 3 && (x % 3 === 0 || b % 3 === 0)) {
      x--;
      b++;
    }

    if (num > 5 && b % 3 && x % 3 && b !== x && a !== x) {
      return ['YES', [a, b, x]];
    } else {
      return ['NO'];
    }
  },
};
