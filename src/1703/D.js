module.exports = {
  getMap: (strs) => {
    const set = new Set();
    for (let i = 0; i < strs.length; i++) {
      set.add(strs[i]);
    }
    const ans = [];
    for (let i = 0; i < strs.length; i++) {
      const s = strs[i];
      let b = 0;
      for (let j = 1; j < s.length; j++) {
        if (set.has(s.substring(j)) && set.has(s.substring(0, j))) {
          b = 1;
          break;
        }
      }
      ans.push(b);
    }
    return ans.join('');
  },
};
