module.exports = {
  getCountOfMatch: (map) => {
    let count = 0;
    if (map[0] === '?') {
      count = 9;
    } else if (map[0] !== '0') {
      count = 1;
    }
    for (let j = 1; j < map.length; j++) {
      if (map[j] === '?') {
        count *= 10;
      }
    }
    return count;
  },
};
