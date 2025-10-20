module.exports = {
  isPrime: (x, k) => {
    if (k === 2 && x === 1) {
      return 'YES';
    }
    if (k > 1 || (k === 1 && x === 1)) {
      return 'NO';
    }
    const d = Math.sqrt(x);
    for (let j = 2; j <= d; j++) {
      if (x % j === 0) {
        return 'NO';
      }
    }
    return 'YES';
  },
};
