module.exports = {
  getCountOfAmazingPerformances: (performances) => {
    let [min] = performances;
    let [max] = performances;
    let count = 0;
    for (let i = 1; i < performances.length; i++) {
      if (performances[i] < min) {
        min = performances[i];
        count++;
        continue;
      }
      if (performances[i] > max) {
        count++;
        max = performances[i];
      }
    }
    return count;
  },
};
