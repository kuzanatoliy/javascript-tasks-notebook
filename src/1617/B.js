module.exports = {
  getProps: (num) => {
    num--;
    if (num % 2 === 1) {
      return [num - 2, 2, 1];
    }
    const d = num / 2;
    return d % 2 === 0 ? [d + 1, d - 1, 1] : [d + 2, d - 2, 1];
  },
};
