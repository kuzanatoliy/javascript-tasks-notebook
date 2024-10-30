module.exports = {
  getMinCost: (map) => {
    let c = 1;
    let m = 1;
    for (let i = 1; i < map.length; i++) {
      if (map[i] !== map[i - 1]) {
        c = 1;
      } else {
        c++;
        m = Math.max(m, c);
      }
    }
    return m + 1;
  },
};
