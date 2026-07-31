/* eslint-disable max-depth */
module.exports = {
  getNumbers: (a, b) => {
    const ans = [-1];
    for (let i = a; i <= b; i++) {
      if (i % 2 === 0 && i !== 2) {
        return [2, i - 2];
      } else if (i % 2 === 1) {
        for (let j = 3; j <= Math.sqrt(i); j++) {
          if (i % j === 0) {
            return [j, i - j];
          }
        }
      }
    }
    return ans;
  },
};
