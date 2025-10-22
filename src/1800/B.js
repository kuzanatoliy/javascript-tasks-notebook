module.exports = {
  getMaxIncome: (str, k) => {
    const map1 = {};
    for (let j = 0; j < str.length; j++) {
      map1[str[j]] = (map1[str[j]] || 0) + 1;
    }
    const map2 = {};
    for (let jj = 0; jj < str.length; jj++) {
      const key = str[jj].toLowerCase();
      map2[key] = (map2[key] || 0) + 1;
    }
    let store = 0;
    const keys = Object.keys(map2);
    let res = 0;
    for (let jjj = 0; jjj < keys.length; jjj++) {
      const d1 = map2[keys[jjj]];
      const d2 = map1[keys[jjj]] || 0;
      res += Math.min(d1 - d2, d2);
      store += Math.floor(Math.abs(d1 - 2 * d2) / 2);
    }
    return res + Math.min(store, k);
  },
};
