module.exports = {
  getAnimalsCount: (number) => {
    const d = (number % 4) / 2;
    if (d > 0) {
      number -= 2;
    }
    return number / 4 + d;
  },
};
