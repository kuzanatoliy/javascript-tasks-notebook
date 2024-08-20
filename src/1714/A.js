module.exports = {
  getSleepingTime: (h, m, points) => {
    const s = h * 60 + m;
    const arr = points.map((item) => {
      const a = item[0] * 60 + item[1];
      if (a < s) {
        return 1440 - s + a;
      }
      return a - s;
    });
    const min = Math.min(...arr);
    return [Math.floor(min / 60), min % 60];
  },
};
