module.exports = {
  getTeamsCount: (k, table) => {
    table.sort((a, b) => {
      if (a[0] === b[0]) {
        return a[1] - b[1];
      }
      return b[0] - a[0];
    });
    const store = {};
    for (let j = 0; j < table.length; j++) {
      const key = table[j].join(' ');
      store[key] = (store[key] || 0) + 1;
    }
    return store[table[k - 1].join(' ')];
  },
};
