module.exports = {
  getCountOfCorrectCommands: (map) => {
    const counts = { D: 0, L: 0, R: 0, U: 0 };
    for (let j = 0; j < map.length; j++) {
      counts[map[j]]++;
    }
    return (Math.min(counts.L, counts.R) + Math.min(counts.U, counts.D)) * 2;
  },
};
