module.exports = {
  getCountOfOperations: (arr) => {
    let count = 0;
    let c0 = 0;
    let cOdd = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === 0) {
        count++;
        c0++;
      } else if (arr[j] > 0) {
        count += arr[j] - 1;
      } else {
        cOdd++;
        count -= arr[j] + 1;
      }
    }
    if (!c0) {
      count += (cOdd % 2) * 2;
    }
    return count;
  },
};
