/* eslint-disable no-loop-func */

module.exports = {
  getFairNumber: (num) => {
    while (
      !num
        .toString()
        .split('')
        .map(BigInt)
        .every((item) => item === 0n || num % item === 0n)
    ) {
      num++;
    }
    return num;
  },
};
