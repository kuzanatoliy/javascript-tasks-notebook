module.exports = {
  getMaxDiscount: (goods, queries) => {
    const arr = goods.sort((a, b) => b - a);
    const sums = [arr[0]];
    for (let j = 1; j < arr.length; j++) {
      sums.push(sums[j - 1] + arr[j]);
    }
    const res = [];
    for (let jj = 0; jj < queries.length; jj++) {
      res.push(
        sums[queries[jj][0] - 1] -
          (sums[queries[jj][0] - queries[jj][1] - 1] || 0)
      );
    }
    return res;
  },
};
