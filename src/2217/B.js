module.exports = {
  getCountOfOperations: (arr, k) => {
    const n = arr.length;
    const a = arr;
    const p = k - 1;
    let l = -1;
    let r = -1;
    for (let i = 0; i < n; i++) {
      if (a[i] !== a[p]) {
        l = i;
        break;
      }
    }
    for (let i = n - 1; i >= 0; i--) {
      if (a[i] !== a[p]) {
        r = i;
        break;
      }
    }
    if (l === -1) {
      return 0;
    }
    let c1 = 0;
    let c2 = 0;
    for (let i = l; i < p; i++) {
      if (a[i] !== a[i + 1]) {
        c1++;
      }
    }
    c1++;
    for (let i = p; i < r; i++) {
      if (a[i] !== a[i + 1]) {
        c2++;
      }
    }
    c2++;
    const ans = Math.max(c1, c2);
    return ans;
  },
};
