module.exports = {
  getCountOfPoints: (num, order) => {
    const counts = new Array(num).fill(0);
    for (let j = 0; j < order.length; j++) {
      counts[order[j] - 1]++;
    }
    return Math.min(...counts);
  },
};
