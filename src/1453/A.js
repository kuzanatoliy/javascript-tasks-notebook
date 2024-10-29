module.exports = {
  getCountOfCrashes: (rows, columns) => {
    const set = new Set(rows);
    const res = columns.filter((item) => set.has(item));
    return res.length;
  },
};
