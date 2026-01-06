module.exports = {
  transformStrings: (strs) => {
    let [res] = strs;
    for (let j = 1; j < strs.length; j++) {
      const l = res + strs[j];
      const r = strs[j] + res;
      res = l < r ? l : r;
    }
    return res;
  },
};
