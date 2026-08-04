const intersection = (...arrs) => {
  let set1 = new Set(arrs[0]);
  for (let i = 1; i < arrs.length; i++) {
    const set2 = new Set();
    for (let j = 0; j < arrs[i].length; j++) {
      if (set1.has(arrs[i][j])) {
        set2.add(arrs[i][j]);
      }
    }
    set1 = set2;
  }
  return Array.from(set1);
};

module.exports = {
  intersection,
};
