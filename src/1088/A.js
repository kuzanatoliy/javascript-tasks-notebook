module.exports = {
  getPair: (num) => {
    if (num > 1) {
      const a = num - (num % 2);
      return [a, a];
    }
    return [-1];
  },
};
