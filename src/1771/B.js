module.exports = {
  getMinCountOfSubsegments: (num, pairs) => {
    const mindist = new Array(num + 1).fill(num + 1);
    for (let i = 0; i < pairs.length; i++) {
      const input = pairs[i];
      const first = Math.min(...input);
      const second = Math.max(...input);
      const min = Math.min(second, mindist[first]);
      mindist[first] = min;
    }
    for (let i = num - 1; i--; i > 0) {
      const min = Math.min(mindist[i], mindist[i + 1]);
      mindist[i] = min;
    }
    let ans = 0;
    for (let i = 0; i < num; i++) {
      ans += mindist[i + 1] - i - 1;
    }
    return ans;
  },
};
