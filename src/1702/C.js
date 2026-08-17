module.exports = {
  isItPossibleToReach: (stations, queries) => {
    const allans = [];
    const firstIdx = {};
    const lastIdx = {};
    const vi = new Set();
    for (let i = 0; i < stations.length; i++) {
      const z = stations[i];
      if (!vi.has(z)) {
        firstIdx[z] = i;
        vi.add(z);
      }
      lastIdx[z] = i;
    }
    for (let yy = 0; yy < queries.length; yy++) {
      if (!vi.has(queries[yy][0]) || !vi.has(queries[yy][1])) {
        allans.push('NO');
        continue;
      }
      const aFirst = firstIdx[queries[yy][0]];
      const bLast = lastIdx[queries[yy][1]];
      if (aFirst <= bLast) {
        allans.push('YES');
      } else {
        allans.push('NO');
      }
    }
    return allans;
  },
};
