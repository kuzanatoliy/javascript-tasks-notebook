module.exports = {
  isGoodSubarray: (array, queries) => {
    const sums = [0];
    const tsums = [0];
    for (let j = 0; j < array.length; j++) {
      sums.push(sums[j] + array[j]);
      tsums.push(tsums[j] + (array[j] === 1 ? 2 : 1));
    }
    const res = [];
    for (let jj = 0; jj < queries.length; jj++) {
      res.push(
        sums[queries[jj][1]] - sums[queries[jj][0] - 1] >=
          tsums[queries[jj][1]] - tsums[queries[jj][0] - 1] &&
          queries[jj][0] !== queries[jj][1]
          ? 'YES'
          : 'NO'
      );
    }
    return res;
  },
};
