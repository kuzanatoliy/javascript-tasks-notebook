module.exports = {
  getMaxCountOfPoints: (a, b, map) => {
    if (b >= 0) {
      return (a + b) * map.length;
    }
    let count = 1;
    for (let j = 1; j < map.length; j++) {
      count += map[j] !== map[j - 1];
    }
    return a * map.length + (Math.floor(count / 2) + 1) * b;
  },
};
