module.exports = {
  isBlackCell: (map, x, y) => {
    let d = 0;
    for (let j = 0; j < map.length; j++) {
      d += map[j] === '4' ? 1 : 2;
    }
    x = Math.abs(x);
    y = Math.abs(y);
    return d >= x + y && map.length >= x && map.length >= y ? 'YES' : 'NO';
  },
};
