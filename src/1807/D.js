module.exports = {
  couldSumBeOdd: (arr, queries) => {
    const sums = [0];
    for (let j = 0; j < arr.length; j++) {
      sums[j + 1] = sums[j] + arr[j];
    }
    const res = [];
    for (let jj = 0; jj < queries.length; jj++) {
      queries[jj][0]--;
      const num =
        sums[queries[jj][0]] +
        sums[sums.length - 1] -
        sums[queries[jj][1]] +
        queries[jj][2] * (queries[jj][1] - queries[jj][0]);
      res.push(num % 2 === 1 ? 'YES' : 'NO');
    }
    return res;
  },
};
