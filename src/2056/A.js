module.exports = {
  getPerimeter: (steps, side) => {
    let sum1 = 0;
    let sum2 = 0;
    for (let j = 1; j < steps.length; j++) {
      sum1 += steps[j][0];
      sum2 += steps[j][1];
    }
    return 2 * sum1 + 2 * sum2 + 4 * side;
  },
};
