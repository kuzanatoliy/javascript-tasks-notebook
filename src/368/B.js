module.exports = {
  solve: (arr, queries) => {
    const set = new Set();
    const temp = new Array(arr.length).fill(0);
    const res = [];
    for (let i = arr.length - 1; i >= 0; i--) {
      set.add(arr[i]);
      temp[i] = set.size;
    }
    for (let i = 0; i < queries.length; i++) {
      res.push(temp[queries[i] - 1]);
    }
    return res;
  },
};
