module.exports = {
  getCountOfSteps: (a, b) => {
    let d = Math.abs(a - b);
    let count = Math.floor(d / 5);
    d %= 5;
    count += Math.floor(d / 2) + (d % 2);
    return count;
  },
};
