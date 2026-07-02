module.exports = {
  getWayCount: (num) => {
    let sum = 0;
    for (let j = 1; j <= num; j++) {
      sum += Math.floor(num / j) ** 2;
    }
    return sum;
  },
};
