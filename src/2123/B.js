module.exports = {
  isItPossibleToSurvive: (j, k, arr) => {
    let max = 0;
    if (k > 1) {
      return 'YES';
    }
    for (let jj = 1; jj < arr.length; jj++) {
      if (arr[max] < arr[jj]) {
        max = jj;
      }
    }
    return arr[j - 1] === arr[max] ? 'YES' : 'NO';
  },
};
