module.exports = {
  getDistance: (runs, x) => {
    const d = [...runs[0].sort((a, b) => a - b)];
    for (let j = 1; j < runs.length; j++) {
      runs[j].sort((a, b) => a - b);
      if (runs[j][0] > d[1] || d[0] > runs[j][1]) {
        return -1;
      }
      d[0] = Math.max(d[0], runs[j][0]);
      d[1] = Math.min(d[1], runs[j][1]);
    }
    if (x < d[0]) {
      return d[0] - x;
    }
    if (x > d[1]) {
      return x - d[1];
    }
    return 0;
  },
};
