module.exports = {
  getShortestPath: (arr, s, t) => {
    s--;
    t--;
    let l = s;
    let r = t;
    if (l > r) {
      l = t;
      r = s;
    }
    let sum = 0;
    for (let j = l; j < r; j++) {
      sum += arr[j];
    }
    return Math.min(sum, arr.reduce((a, b) => a + b, 0) - sum);
  },
};
