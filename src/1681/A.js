module.exports = {
  getWinner: (arrN, arrM) => {
    const m1 = Math.max(...arrN);
    const m2 = Math.max(...arrM);
    if (m1 === m2) {
      return ['Alice', 'Bob'];
    } else if (m1 < m2) {
      return ['Bob', 'Bob'];
    } else {
      return ['Alice', 'Alice'];
    }
  },
};
