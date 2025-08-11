module.exports = {
  getCountOfChanges: (arr) => {
    let sum = arr.reduce((a, b) => a + b, 0);
    if (sum / arr.length >= 4.5) {
      return 0;
    }
    arr.sort((a, b) => a - b);
    for (let j = 0; j < arr.length; j++) {
      sum += 5 - arr[j];
      if (sum / arr.length >= 4.5) {
        return j + 1;
      }
    }
    return arr.length;
  },
};
