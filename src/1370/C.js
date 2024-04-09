function checkPrime(number) {
  for (let i = 2; i < Math.min(50000, number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

module.exports = {
  getWinner: (number) => {
    if (number === 1) {
      return 'FastestFinger';
    }
    if (number > 2 && number % 2 === 0) {
      if ((number & (number - 1)) === 0) {
        return 'FastestFinger';
      } else if (number % 4 !== 0 && checkPrime(number / 2)) {
        return 'FastestFinger';
      }
    }
    return 'Ashishgup';
  },
};
