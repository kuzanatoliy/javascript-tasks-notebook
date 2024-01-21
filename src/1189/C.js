/* eslint-disable no-const-assign */
/* eslint-disable no-return-assign */
module.exports = {
  getQueriesResults: (sequence, queries) => {
    let currSum = 0;
    const arr = sequence.map((item) => (currSum += parseInt(item)));
    const res = [];
    for (let i = 0; i < queries.length; i++) {
      const sum =
        queries[i][0] === 0
          ? arr[queries[i][1] - 1]
          : arr[queries[i][1] - 1] - arr[queries[i][0] - 1];
      res.push(parseInt(sum / 10));
    }
    return res;
  },
};
