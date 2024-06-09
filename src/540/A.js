module.exports = {
  getCountOfOperations: (origin, target) => {
    let count = 0;
    for (let j = 0; j < origin.length; j++) {
      const o = +origin[j];
      const t = +target[j];
      if (o > t) {
        count += Math.min(o - t, 10 - o + t);
        continue;
      }
      count += Math.min(t - o, 10 - t + o);
    }
    return count;
  },
};
