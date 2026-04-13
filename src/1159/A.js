module.exports = {
  getCountOfStones: (map) => {
    let count = 0;
    for (let j = 0; j < map.length; j++) {
      if (map[j] === '+') {
        count++;
      } else if (map[j] === '-' && count > 0) {
        count--;
      }
    }
    return count;
  },
};
