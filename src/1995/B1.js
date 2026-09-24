const max = (a, b) => (a > b ? a : b);

module.exports = {
  getKthNumber: (m, arr) => {
    const initialM = m;
    const freqs = {};
    let ans = 0n;
    arr.sort((a, b) => Number(a - b));

    let j = 0;
    for (let i = 0; i < arr.length; i++) {
      m -= arr[i];
      freqs[arr[i]] = (freqs[arr[i]] || 0) + 1;
      while (m < 0n || (j <= i && arr[i] - arr[j] > 1)) {
        m += BigInt(arr[j]);
        freqs[arr[j]]--;
        if (freqs[arr[j]] === 0) {
          delete freqs[arr[j]];
        }
        j++;
      }
      ans = max(ans, initialM - m);
    }
    return ans;
  },
};
