module.exports = {
  getCountOfSteps: (l, r) => {
    let curr = 1;
    let count = 0;
    while (curr <= r) {
      curr *= 2;
      count++;
    }
    return count - 1;
  },
};
