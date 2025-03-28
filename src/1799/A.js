module.exports = {
  getMap: (n, m, p) => {
    const included = {};
    const ans = new Array(n).fill(-1);
    let pos = n - 1;
    for (let i = 0; i < m; i++) {
      if (!included[p[i]]) {
        ans[pos] = i + 1;
        pos -= 1;
        included[p[i]] = true;
      }
    }
    return ans.map((item) => item);
  },
};
