module.exports = {
  getOperationsCount: (map) => {
    let count = 0;
    for (let j = 1; j < map.length; j++) {
      count += map[j - 1] !== map[j];
    }
    if (map[0] === '1') {
      if (count === 0) {
        return map.length + 1;
      } else {
        return map.length + count + (count === 1 ? 0 : -1);
      }
    }
    if (count > 1) {
      return map.length + count + (count === 2 ? -1 : -2);
    }
    return map.length + count;
  },
};
