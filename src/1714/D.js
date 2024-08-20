/* eslint-disable prefer-destructuring */
/* eslint-disable guard-for-in */
module.exports = {
  getCountOfOperations: (str, arr) => {
    const m = {};
    for (let j = 0; j < arr.length; j++) {
      const s = arr[j];
      for (let i = 0; i < s.length; i++) {
        const c = s[i];
        m[c] = m[c] || [];
        m[c].push([s.length - 1 - i, j]);
      }
    }
    for (const c in m) {
      m[c].sort((a, b) => b[0] - a[0]);
    }
    let k = 0;
    const ans = [];
    for (let i = 0; i < str.length; ) {
      const ch = str[i];
      if (!m[ch]) {
        return [-1];
      }
      let found = 0;
      for (let t = 0; t < m[ch].length; t++) {
        const add = m[ch][t][0];
        const w = m[ch][t][1];
        const s = arr[w];
        const j = i + add;
        const start = j + 1 - s.length;
        if (start < 0 || j >= str.length) {
          continue;
        }
        if (str.slice(j + 1 - s.length, j + 1) === s) {
          found = 1;
          k++;
          i = j + 1;
          ans.push([w + 1, start + 1]);
          break;
        }
      }
      if (!found) {
        return [-1];
      }
    }
    return [k, ...ans];
  },
};
