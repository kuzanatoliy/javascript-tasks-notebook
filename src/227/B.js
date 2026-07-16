module.exports = {
  getOperationsCounts: (arr, queries) => {
    const temp = new Array(arr.length);
    for (let j = 0; j < arr.length; j++) {
      temp[arr[j] - 1] = j;
    }
    let c1 = 0;
    let c2 = 0;
    for (let jj = 0; jj < queries.length; jj++) {
      const ind = temp[queries[jj] - 1];
      c1 += ind + 1;
      c2 += arr.length - ind;
    }
    return [c1, c2];
  },
};
