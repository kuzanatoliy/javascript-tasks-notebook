module.exports = {
  getMaxValues: (arr, queries) => {
    let [max] = arr;
    for (let j = 1; j < arr.length; j++) {
      if (max < arr[j]) {
        max = arr[j];
      }
    }
    const res = [];
    for (let jj = 0; jj < queries.length; jj++) {
      if (max >= queries[jj][1] && max <= queries[jj][2]) {
        max += queries[jj][0] === '-' ? -1 : 1;
      }
      res.push(max);
    }
    return res;
  },
};
