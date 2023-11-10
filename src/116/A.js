module.exports = {
  checkTramCapacity: (plan) => {
    let sum = 0;
    let max = 0;
    for (var i = 0; i < plan.length; i++) {
      sum += plan[i][1] - plan[i][0];
      max = Math.max(sum, max);
    }
    return max;
  },
};
