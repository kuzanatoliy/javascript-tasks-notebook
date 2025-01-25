module.exports = {
  getAnswers: (arr, queries) => {
    const res = [];
    let sum = arr.reduce((a, b) => a + b, 0);
    for (let j = 0; j < queries.length; j++) {
      if (queries[j][0] === 1) {
        sum -= arr[queries[j][1] - 1];
        arr[queries[j][1] - 1] = 1 - arr[queries[j][1] - 1];
        sum += arr[queries[j][1] - 1];
        continue;
      }
      res.push(queries[j][1] <= sum ? 1 : 0);
    }
    return res;
  },
};
