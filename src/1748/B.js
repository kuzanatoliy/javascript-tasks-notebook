/* eslint-disable max-depth */
module.exports = {
  getCountOfSubarrays: (str) => {
    const n = str.length;
    const count = [];
    for (let d = 0; d < 10; d++) {
      count[d] = [0];
    }
    const s = str.split('').map(Number);
    for (let i = 0; i < n; i++) {
      for (let d = 0; d < 10; d++) {
        if (s[i] !== d) {
          count[d][i + 1] = count[d][i];
          continue;
        }
        count[d][i + 1] = count[d][i] + 1;
      }
    }

    let ans = 0;
    for (let i = 0; i < n; i++) {
      for (let len = 1; len < 101; len++) {
        const end = i + len;
        if (end > n) {
          break;
        }
        let maxCount = 0;
        let different = 0;
        for (let d = 0; d < 10; d++) {
          const currentCount = count[d][end] - count[d][i];
          if (currentCount !== 0) {
            different++;
            if (currentCount > maxCount) {
              maxCount = currentCount;
              if (maxCount > 10) {
                break;
              }
            }
          }
        }
        if (different >= maxCount) {
          ans++;
        }
      }
    }
    return ans;
  },
};
