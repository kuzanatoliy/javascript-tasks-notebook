module.exports = {
  getOriginalArray: (subarrs) => {
    const counts = {};
    let j = 0;
    const prev = [];
    while (j < subarrs.length) {
      if (!counts[subarrs[j][0]]) {
        prev.push(j);
      }
      counts[subarrs[j][0]] = (counts[subarrs[j][0]] || 0) + 1;
      if (
        prev[1] &&
        counts[subarrs[prev[0]][0]] !== counts[subarrs[prev[1]][0]]
      ) {
        return counts[subarrs[prev[0]][0]] > counts[subarrs[prev[1]][0]]
          ? [subarrs[prev[0]][0], ...subarrs[prev[1]]]
          : [subarrs[prev[1]][0], ...subarrs[prev[0]]];
      }
      j++;
    }
    return [];
  },
};
