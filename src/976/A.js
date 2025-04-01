module.exports = {
  getMinNumber: (snum) =>
    snum.length === 1
      ? snum
      : `1${snum
          .split('')
          .filter((item) => item === '0')
          .join('')}`,
};
