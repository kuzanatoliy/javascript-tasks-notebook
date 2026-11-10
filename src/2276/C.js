module.exports = {
  getSubarrCount: (k, arr) => {
    const P = [0];
    for (let i = 1; i <= arr.length; i++) {
      P.push((P[i - 1] + (arr[i - 1] % k)) % k);
    }
    let ans = 0;
    const cnt = new Array(k).fill(0);
    for (let r = k + 1; r <= arr.length; r++) {
      cnt[P[r - k - 1]]++;
      ans += cnt[P[r]];
    }
    return ans;
  },
};
