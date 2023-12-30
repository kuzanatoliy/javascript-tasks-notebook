module.exports = {
  itItPossibleToPlaceDominoes: (numbers) => {
    // eslint-disable-next-line prefer-const
    let [n, m, kh] = numbers;
    let kv = (n * m) / 2 - kh;

    if (n % 2) {
      kh -= m / 2;
      if (kh < 0) {
        return 'NO';
      }
    }

    if (m % 2) {
      kv -= n / 2;
      if (kv < 0) {
        return 'NO';
      }
    }

    if (kv % 2 || kh % 2) {
      return 'NO';
    }

    return 'YES';
  },
};
