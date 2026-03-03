module.exports = {
  getMinTime: (arr) => {
    let total = 0;
    for (let i = 1; i < arr.length; i++) {
      total += Math.abs(arr[i] - arr[i - 1]);
    }
    let best = total;
    if (arr.length > 1) {
      best = Math.min(
        total - Math.abs(arr[1] - arr[0]),
        total - Math.abs(arr[arr.length - 1] - arr[arr.length - 2])
      );
    }
    for (let i = 1; i < arr.length - 1; i++) {
      const left = Math.abs(arr[i] - arr[i - 1]);
      const right = Math.abs(arr[i + 1] - arr[i]);
      const merged = Math.abs(arr[i + 1] - arr[i - 1]);
      const candidate = total - left - right + merged;
      if (candidate < best) {
        best = candidate;
      }
    }
    return best;
  },
};
