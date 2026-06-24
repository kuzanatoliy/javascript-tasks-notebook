module.exports = {
  getChangesCount: (k, arr) => {
    let sum = 0;
    for (let j = 0; j < k; j++) {
      let a1 = 0;
      let a2 = 0;
      for (let jj = j; jj < arr.length; jj += k) {
        if (arr[jj] === 1) {
          a1++;
        } else {
          a2++;
        }
      }
      sum += Math.min(a1, a2);
    }
    return sum;
  },
};
