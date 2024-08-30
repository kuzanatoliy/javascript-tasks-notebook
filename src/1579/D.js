module.exports = {
  getPairs: (array) => {
    const a = array
      .map((item, index) => [item, index])
      .sort((x, y) => y[0] - x[0]);

    const ans = [];
    let r = 0;
    while (a[r + 1]) {
      r++;
    }
    while (a[0][0] > a[1][0]) {
      if (r > 0 && a[r][0] > 0) {
        ans.push(a[0][1], a[r][1]);
        a[0][0]--;
        a[r][0]--;
      }
      if (a[r][0] === 0) {
        r--;
      }
      if (r === 0) {
        break;
      }
    }
    while (a[1][0]) {
      for (let i = 0; i < a.length; i++) {
        if (a[i][0] === 0) {
          break;
        }
        if (a[i][0]) {
          ans.push(a[i][1]);
          a[i][0]--;
        }
      }
    }

    const res = [];
    for (let i = 0; i < ans.length >> 1; i++) {
      res.push([ans[2 * i] + 1, ans[2 * i + 1] + 1]);
    }
    return res;
  },
};
