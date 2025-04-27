module.exports = {
  getCleaningTimes: (b, d, arr) => {
    let juicer = 0;
    let counter = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > b) {
        continue;
      }
      if (juicer + arr[i] > d) {
        juicer = 0;
        counter++;
      } else {
        juicer += arr[i];
      }
    }
    return counter;
  },
};
