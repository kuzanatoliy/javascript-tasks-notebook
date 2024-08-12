module.exports = {
  getCountOfCells: (map) => {
    const mr = {};
    const mc = {};
    for (let i = 0; i < map.length; i++) {
      for (let j = 0; j < map[i].length; j++) {
        if (map[i][j] === 'S') {
          mr[i] = true;
          mc[j] = true;
        }
      }
    }
    let ans = 0;
    for (let i = 0; i < map.length; i++) {
      for (let j = 0; j < map[i].length; j++) {
        if (!mr[i] || !mc[j]) {
          ans++;
        }
      }
    }
    return ans;
  },
};
