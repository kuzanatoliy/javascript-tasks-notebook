module.exports = {
  getMaxSubArray: (arr) => {
    const m = new Map();
    let ans = -1;
    for (let i = 0; i < arr.length; i++) {
      if (m.has(arr[i])) {
        ans = Math.max(ans, m.get(arr[i]) + arr.length - i);
      }
      m.set(arr[i], i);
    }
    return ans;
  },
};
