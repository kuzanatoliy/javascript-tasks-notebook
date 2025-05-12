module.exports = {
  getPositions: (arr, queries) => {
    const res = [];

    const d = new Array(arr.length).fill(-1);
    for (let i = 1; i < arr.length; i++) {
      d[i] = d[i - 1];
      if (arr[i] !== arr[i - 1]) {
        d[i] = i - 1;
      }
    }

    for (let j = 0; j < queries.length; j++) {
      const l = queries[j][0] - 1;
      const r = queries[j][1] - 1;
      res.push(d[r] >= l ? [d[r] + 1, r + 1] : [-1, -1]);
    }
    return res;
  },
};
