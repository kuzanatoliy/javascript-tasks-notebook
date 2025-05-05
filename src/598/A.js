module.exports = {
  getSumResult: (num) => {
    let sum = (num * (num + 1n)) / 2n;
    let curr = 1n;
    while (curr <= num) {
      sum -= curr * 2n;
      curr *= 2n;
    }
    return sum;
  },
};
