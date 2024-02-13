const CODEFORCES = 'codeforces';

module.exports = {
  getCountOfDif: (string) => {
    let sum = 0;
    for (let j = 0; j < CODEFORCES.length; j++) {
      if (CODEFORCES[j] !== string[j]) {
        sum++;
      }
    }
    return sum;
  },
};
