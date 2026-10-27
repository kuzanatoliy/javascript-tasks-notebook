module.exports = {
  isOneRace: (g1, g2) => {
    if (g1.length !== g2.length) {
      return 'NO';
    }
    const s1 = [];
    const s2 = [];
    for (let j = 0; j < g1.length; j++) {
      if (g1[j] !== g2[j]) {
        s1.push(g1[j]);
        s2.push(g2[j]);
      }
    }
    return !s1.length || (s1.length === 2 && s1[0] === s2[1] && s1[1] === s2[0])
      ? 'YES'
      : 'NO';
  },
};
