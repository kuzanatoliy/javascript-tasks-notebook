/* eslint-disable no-underscore-dangle */
module.exports = {
  getInterval: (arr) => {
    const gcd = (array) => {
      const _gcd = (x, y) => (!y ? x : gcd([y, x % y]));
      return array.reduce((a, b) => _gcd(a, b));
    };
    return gcd(
      arr.map((el, i) => Math.abs(el - i - 1)).filter((el) => el !== 0)
    );
  },
};
