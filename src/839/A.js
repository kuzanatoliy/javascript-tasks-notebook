module.exports = {
  getCountOfDays: (days, count) => {
    let store = 0;
    for (let j = 0; j < days.length; j++) {
      store += days[j];
      const d = Math.min(8, store);
      count -= d;
      if (count <= 0) {
        return j + 1;
      }
      store -= d;
    }
    return -1;
  },
};
