const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

module.exports = {
  isItPossibleToConstructString: (number) => {
    if (number % 2 === 1) {
      return ['NO'];
    }
    number /= 2;
    let res = '';
    for (let j = 0; j < number; j++) {
      res += ALPHABET[j] + ALPHABET[j];
    }
    return ['YES', res];
  },
};
