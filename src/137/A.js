module.exports = {
  getCountOfOperations: (map) => {
    let count = 1;
    let c = 0;
    for (let j = 1; j < map.length; j++) {
      c++;
      if (map[j] !== map[j - 1] || c === 5) {
        count++;
        c = 0;
      }
    }
    return count;
  },
};
