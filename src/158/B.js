module.exports = {
  checkTaxisCount: (groups) => {
    const counts = [0, 0, 0, 0];
    for (let i = 0; i < groups.length; i++) {
      counts[groups[i] - 1]++;
    }
    let sum = counts[3] + Math.min(counts[0], counts[2]);
    if (counts[0] > counts[2]) {
      counts[0] -= counts[2];
    } else {
      sum += counts[2] - counts[0];
      counts[0] = 0;
    }
    sum += Math.floor(counts[0] / 4);
    counts[0] = counts[0] % 4;
    if (counts[0] === 3) {
      sum++;
    } else if (counts[0] > 0) {
      counts[1]++;
    }
    sum += Math.ceil(counts[1] / 2);
    return sum;
  },
};
