module.exports = {
  getMaxCountOfArrays: (arr) => {
    let curr = 0;
    let count = 1;
    for (let j = 1; j < arr.length; j++) {
      if (arr[j] - arr[curr] > 1) {
        curr = j;
        count++;
      }
    }
    return count;
  },
};
