module.exports = {
  isGridExist: (rows, cols) =>
    Math.min(rows, cols) >= 2 && Math.max(rows, cols) >= 3 ? 'YES' : 'NO',
};
