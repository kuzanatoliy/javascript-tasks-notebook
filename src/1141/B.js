module.exports = {
  getMaxWorkingPeriod: (array) => {
    const arr = [...array, ...array];
    let curr = 0;
    let max = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j]) {
        curr++;
        max = Math.max(curr, max);
      } else {
        curr = 0;
      }
    }
    return max;
  },
};
