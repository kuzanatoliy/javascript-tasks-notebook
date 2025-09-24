module.exports = {
  getMinTotalTime: (k, num, jobs, times) => {
    const obj = {};
    for (let i = 0; i < jobs.length; i++) {
      if (!obj[jobs[i]]) {
        obj[jobs[i]] = [];
      }
      obj[jobs[i]].push(parseInt(times[i]));
    }
    let sorted = [];
    for (const j in obj) {
      if (obj[j].length > 1) {
        obj[j] = obj[j].sort((a, b) => b - a);
        sorted.push(...obj[j].slice(1));
      }
    }
    sorted = sorted.map((x) => parseInt(x));
    sorted.sort((a, b) => b - a);
    const start = k - num;

    sorted = sorted.slice(start);
    return sorted.reduce((a, b) => a + b, 0);
  },
};
