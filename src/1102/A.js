module.exports = {
  getMinValue: (num) => {
    const d = num % 4;
    return d === 0 || d === 3 ? 0 : 1;
  },
};
