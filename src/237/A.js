module.exports = {
  getCountOfCashes: (times) => {
    const map = {};
    for (let j = 0; j < times.length; j++) {
      map[times[j]] = (map[times[j]] || 0) + 1;
    }
    let max = 0;
    Object.keys(map).forEach((item) => {
      if (map[item] > max) {
        max = map[item];
      }
    });
    return max;
  },
};
