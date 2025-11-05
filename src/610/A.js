module.exports = {
  getCountOfVariants: (num) => {
    if (num % 2 || num <= 4) {
      return 0;
    }
    num /= 2;
    const min = Math.floor(num / 2);
    const max = Math.ceil(num / 2);
    return min === max ? min - 1 : min;
  },
};
