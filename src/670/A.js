module.exports = {
  getMinmaxCountOfDays: (days) => {
    if (days === 1) {
      return [0, 1];
    }
    let min = Math.floor(days / 7) * 2;
    if (days % 7 === 6) {
      min++;
    }
    days -= 2;
    let max = Math.floor(days / 7) * 2;
    if (days % 7 === 6) {
      max++;
    }
    return [min, max + 2];
  },
};
