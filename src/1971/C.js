module.exports = {
  isIntersection: (a, b, c, d) => {
    const map = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    map[a] = 'r';
    map[b] = 'r';
    map[c] = 'b';
    map[d] = 'b';
    const arr = map.filter((item) => item !== 0);
    return arr[0] !== arr[1] && arr[1] !== arr[2] ? 'YES' : 'NO';
  },
};
