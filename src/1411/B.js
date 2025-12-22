/* eslint-disable no-loop-func */
/* eslint-disable no-unmodified-loop-condition */
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
