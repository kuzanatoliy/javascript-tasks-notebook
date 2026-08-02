module.exports = {
  getDaysBeforeWarrmenrDay: (arr) => {
    const res = new Array(arr.length).fill(0);
    for (let j = arr.length - 1; j > 0; j--) {
      for (let jj = j - 1; jj >= 0; jj--) {
        if (arr[j] > arr[jj]) {
          res[jj] = j - jj;
        }
      }
    }
    return res;
  },
};
