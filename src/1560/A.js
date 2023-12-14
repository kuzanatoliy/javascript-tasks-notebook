module.exports = {
  getNumber: (number) => {
    let n = 0;
    let i = 0;
    while (i < number) {
      n++;
      if (n % 3 === 0 || n % 10 === 3) {
        continue;
      }
      i++;
    }
    return n;
  },
};
