module.exports = {
  getStatusMap: (num, a, q) => {
    const set = new Set(q);
    let map = '';
    for (let j = 0; j < a.length; j++) {
      if (set.has(a[j])) {
        map += set.size === num ? '1' : 0;
      } else {
        map += set.size === num - 1 ? '1' : '0';
      }
    }
    return map;
  },
};
