module.exports = {
  getCount: (map) => {
    let si = 0;
    let sa = 0;
    for (let j = 0; j < map.length; j++) {
      si += map[j] === 'I';
      sa += map[j] === 'A';
    }
    switch (si) {
      case 0:
        return sa;
      case 1:
        return 1;
      default:
        return 0;
    }
  },
};
