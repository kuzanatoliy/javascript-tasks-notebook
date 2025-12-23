module.exports = {
  getLEastCommonMultiple: (num) => {
    for (let j = 2; j * j <= num; j++) {
      if (num % j === 0) {
        const d = num / j;
        return [d, num - d];
      }
    }
    return [1, num - 1];
  },
};
