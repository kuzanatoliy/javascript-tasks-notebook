module.exports = {
  getCountOfExams: (num, k) => {
    const d = k - 2 * num;
    return Math.max(num - d, 0);
  },
};
