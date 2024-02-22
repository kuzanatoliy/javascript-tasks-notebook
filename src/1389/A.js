module.exports = {
  getResult: (a, b) => {
    const a2 = a * 2;
    return a2 <= b ? [a, a2] : [-1, -1];
  },
};
