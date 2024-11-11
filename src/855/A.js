module.exports = {
  areStringsPresented: (strs) => {
    const set = new Set();
    const res = [];
    for (let j = 0; j < strs.length; j++) {
      if (set.has(strs[j])) {
        res.push('YES');
        continue;
      }
      res.push('NO');
      set.add(strs[j]);
    }
    return res;
  },
};
