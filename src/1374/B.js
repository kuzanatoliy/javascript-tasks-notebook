module.exports = {
  getMinNumber: (number) => {
    let count = 0;
    while (number > 1 && number % 3 === 0) {
      if (number % 6) {
        number *= 2;
      } else {
        number /= 6;
      }
      count++;
    }
    return number > 1 ? -1 : count;
  },
};
