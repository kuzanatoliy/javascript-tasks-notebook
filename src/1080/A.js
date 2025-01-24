module.exports = {
  getNotebookCount: (num, k) =>
    Math.ceil((num * 2) / k) +
    Math.ceil((num * 5) / k) +
    Math.ceil((num * 8) / k),
};
