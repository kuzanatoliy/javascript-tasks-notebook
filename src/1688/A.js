module.exports = {
  getMinNumber: (num) => (num < 2 ? 3 : !(num & (num - 1)) + (num & -num)),
};
