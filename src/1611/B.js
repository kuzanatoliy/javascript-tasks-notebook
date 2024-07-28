module.exports = {
  getCountOfTeams: (a, b) => {
    const count = Math.floor((a + b) / 4);
    const d = Math.min(a, b);
    return count > d ? d : count;
  },
};
