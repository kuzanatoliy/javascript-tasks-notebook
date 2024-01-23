module.exports = {
  getMinNumberOfTimes: (monsters) => {
    const vars = monsters.sort((a, b) => a - b);
    let sum = 0;
    if (monsters.length === 1) {
      return 0;
    }
    if (vars[0] > 1) {
      sum = vars[0] - 1;
      vars[0] = 1;
    }
    for (let j = 1; j < monsters.length; j++) {
      let d = vars[j] - vars[j - 1];
      if (d <= 1) {
        continue;
      }
      d--;
      sum += d;
      vars[j] -= d;
    }
    return sum;
  },
};
