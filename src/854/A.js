module.exports = {
  getIntegers: (num) => {
    if (num % 2 === 1) {
      const d = Math.floor(num / 2);
      return [d, d + 1];
    }
    const dd = num / 2;
    return dd % 2 === 0 ? [dd - 1, dd + 1] : [dd - 2, dd + 2];
  },
};
