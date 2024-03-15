module.exports = {
  getK: (number) => (1 << Math.log2(number)) - 1,
};
