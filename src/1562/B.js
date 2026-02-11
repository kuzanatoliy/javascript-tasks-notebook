const primes = [
  2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
  73, 79, 83, 89, 97,
];

module.exports = {
  transformNumber: (snum) => {
    for (let i = 0; i < snum.length; i++) {
      if (
        snum[i] === '1' ||
        snum[i] === '4' ||
        snum[i] === '6' ||
        snum[i] === '8' ||
        snum[i] === '9'
      ) {
        return snum[i];
      }
    }

    for (let m = 0; m < snum.length; m++) {
      for (let j = m + 1; j < snum.length; j++) {
        const number = (snum[m] - '0') * 10 + (snum[j] - '0');
        if (!primes.includes(number)) {
          return snum[m] + snum[j];
        }
      }
    }
    return '0';
  },
};
